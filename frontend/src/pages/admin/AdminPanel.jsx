import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authAPI, templeAPI } from "../../api/endpoints";

const AdminPanel = () => {
  const [token, setToken] = useState(localStorage.getItem("adminToken"));
  const [email, setEmail] = useState("admin@bharatvraman.com");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");

  const [temples, setTemples] = useState([]);
  const [loading, setLoading] = useState(false);

  // Form State
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "", slug: "", templeType: "", established: "", state: "", city: "",
    description: "", historicalBackground: "", deityInformation: "",
    rituals: "", darshanTimings: "", visitorGuidelines: "", nearbyFacilities: "",
    festivals: "", images: ""
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    if (token) {
      fetchTemples();
    }
  }, [token]);

  const fetchTemples = async () => {
    try {
      setLoading(true);
      const res = await templeAPI.getAll();
      setTemples(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await authAPI.login({ email, password });
      localStorage.setItem("adminToken", res.data.token);
      setToken(res.data.token);
      setError("");
    } catch (err) {
      setError("Invalid credentials.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setToken(null);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dbData = {
        ...formData,
        images: formData.images ? formData.images.split(",").map(img => img.trim()).filter(i => i) : [],
        festivals: formData.festivals ? formData.festivals.split(",").map(f => f.trim()).filter(f => f) : []
      };

      if (isEditing) {
        await templeAPI.update(editId, dbData);
      } else {
        await templeAPI.create(dbData);
      }

      setFormData({
        name: "", slug: "", templeType: "", established: "", state: "", city: "",
        description: "", historicalBackground: "", deityInformation: "",
        rituals: "", darshanTimings: "", visitorGuidelines: "", nearbyFacilities: "",
        festivals: "", images: ""
      });
      setIsEditing(false);
      setEditId(null);
      fetchTemples();
    } catch (err) {
      alert("Error saving temple");
      console.error(err);
    }
  };

  const handleEdit = (temple) => {
    setIsEditing(true);
    setEditId(temple._id);
    setFormData({
      ...temple,
      images: temple.images ? temple.images.join(", ") : "",
      festivals: temple.festivals ? temple.festivals.join(", ") : ""
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this temple?")) {
      try {
        await templeAPI.delete(id);
        fetchTemples();
      } catch (err) {
        console.error(err);
      }
    }
  };

  if (!token) {
    // Login Screen
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fffbeb]">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md border border-amber-200">
          <h2 className="text-3xl font-heading text-neutral-800 mb-6 text-center">Admin Login</h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-600">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full mt-1 p-2 border border-neutral-300 rounded outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-600">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full mt-1 p-2 border border-neutral-300 rounded outline-none" />
            </div>
            <button type="submit" className="w-full py-2 bg-neutral-800 text-amber-50 rounded hover:bg-neutral-900 transition">Login</button>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard Screen
  return (
    <div className="min-h-screen bg-[#fffbeb] p-6 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-amber-300 pb-4">
          <h1 className="text-4xl font-heading text-neutral-800">Admin Dashboard</h1>
          <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded text-sm hover:bg-red-700">Logout</button>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">

          {/* List of Temples */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-2xl font-heading mb-4 text-neutral-800">Manage Temples</h2>
            {loading ? <p>Loading...</p> : (
              <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
                {temples.map(temple => (
                  <div key={temple._id} className="bg-white p-4 rounded shadow-sm border border-amber-100 flex justify-between items-center">
                    <div>
                      <h3 className="font-heading text-lg text-neutral-800">{temple.name}</h3>
                      <p className="text-xs text-neutral-500">{temple.city}, {temple.state}</p>
                    </div>
                    <div className="flex flex-col gap-2 relative">
                      <button onClick={() => handleEdit(temple)} className="px-3 py-1 bg-amber-500 text-white rounded text-xs hover:bg-amber-600">Edit</button>
                      <button onClick={() => handleDelete(temple._id)} className="px-3 py-1 bg-neutral-600 text-white rounded text-xs hover:bg-neutral-700">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3 bg-white p-6 rounded shadow-sm border border-amber-200">
            <h2 className="text-2xl font-heading mb-6 text-neutral-800">{isEditing ? "Edit Temple" : "Add New Temple"}</h2>
            <form onSubmit={handleSubmit} className="space-y-4 overflow-y-auto px-1 pb-4">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Basic Info */}
                <div className="col-span-2 lg:col-span-1">
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Name *</label>
                  <input name="name" value={formData.name || ''} onChange={handleInputChange} required className="w-full p-2 border border-neutral-300 rounded text-sm outline-none" />
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Slug *</label>
                  <input name="slug" value={formData.slug || ''} onChange={handleInputChange} required className="w-full p-2 border border-neutral-300 rounded text-sm outline-none" />
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Temple Type</label>
                  <input name="templeType" value={formData.templeType || ''} onChange={handleInputChange} className="w-full p-2 border border-neutral-300 rounded text-sm outline-none" placeholder="e.g. Jyotirlinga" />
                </div>

                {/* Location Info */}
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">State</label>
                  <input name="state" value={formData.state || ''} onChange={handleInputChange} className="w-full p-2 border border-neutral-300 rounded text-sm outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">City</label>
                  <input name="city" value={formData.city || ''} onChange={handleInputChange} className="w-full p-2 border border-neutral-300 rounded text-sm outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Established</label>
                  <input name="established" value={formData.established || ''} onChange={handleInputChange} className="w-full p-2 border border-neutral-300 rounded text-sm outline-none" placeholder="e.g. 12th Century CE" />
                </div>

                {/* Specifics */}
                <div className="col-span-2 lg:col-span-3">
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Darshan Timings</label>
                  <input name="darshanTimings" value={formData.darshanTimings || ''} onChange={handleInputChange} className="w-full p-2 border border-neutral-300 rounded text-sm outline-none" placeholder="e.g. 4:00 AM - 9:00 PM" />
                </div>

                <div className="col-span-2 lg:col-span-3">
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Deity Information</label>
                  <input name="deityInformation" value={formData.deityInformation || ''} onChange={handleInputChange} className="w-full p-2 border border-neutral-300 rounded text-sm outline-none" placeholder="e.g. Dedicated to Lord Shiva" />
                </div>

                {/* Media & Arrays */}
                <div className="col-span-2 lg:col-span-3">
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Image URLs (comma separated)</label>
                  <input name="images" value={formData.images || ''} onChange={handleInputChange} className="w-full p-2 border border-neutral-300 rounded text-sm outline-none" />
                </div>
                <div className="col-span-2 lg:col-span-3">
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Festivals (comma separated)</label>
                  <input name="festivals" value={formData.festivals || ''} onChange={handleInputChange} className="w-full p-2 border border-neutral-300 rounded text-sm outline-none" placeholder="e.g. Maha Shivaratri, Kartik Purnima" />
                </div>

                {/* Extended Descriptions */}
                <div className="col-span-2 lg:col-span-3">
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Short Description</label>
                  <textarea name="description" value={formData.description || ''} onChange={handleInputChange} className="w-full p-2 border border-neutral-300 rounded text-sm outline-none" rows="2"></textarea>
                </div>
                <div className="col-span-2 lg:col-span-3">
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Historical Background</label>
                  <textarea name="historicalBackground" value={formData.historicalBackground || ''} onChange={handleInputChange} className="w-full p-2 border border-neutral-300 rounded text-sm outline-none" rows="3"></textarea>
                </div>
                <div className="col-span-2 lg:col-span-3">
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Rituals & Daily Pooja</label>
                  <textarea name="rituals" value={formData.rituals || ''} onChange={handleInputChange} className="w-full p-2 border border-neutral-300 rounded text-sm outline-none" rows="2"></textarea>
                </div>
                <div className="col-span-2 lg:col-span-3">
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Visitor Guidelines</label>
                  <textarea name="visitorGuidelines" value={formData.visitorGuidelines || ''} onChange={handleInputChange} className="w-full p-2 border border-neutral-300 rounded text-sm outline-none" rows="2"></textarea>
                </div>
                <div className="col-span-2 lg:col-span-3">
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Nearby Facilities</label>
                  <textarea name="nearbyFacilities" value={formData.nearbyFacilities || ''} onChange={handleInputChange} className="w-full p-2 border border-neutral-300 rounded text-sm outline-none" rows="2"></textarea>
                </div>

              </div>

              <div className="flex gap-2 mt-4 pt-2 border-t border-neutral-100">
                <button type="submit" className="w-full py-3 bg-neutral-800 text-amber-50 rounded hover:bg-neutral-900 transition font-heading text-lg">
                  {isEditing ? "Save Changes" : "Create Temple"}
                </button>
                {isEditing && (
                  <button type="button" onClick={() => { setIsEditing(false); setEditId(null); setFormData({}); }} className="w-1/3 py-3 bg-neutral-200 text-neutral-700 rounded hover:bg-neutral-300 transition font-heading text-lg">
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
