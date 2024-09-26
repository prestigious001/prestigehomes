// import React, { useState } from "react";
// import { data as initialData } from "./Data"; // Import the initial data

// const App = () => {
//   // State to hold the current list of items
//   const [items, setItems] = useState(initialData);
  
//   // State to hold the new item form data
//   const [newItem, setNewItem] = useState({
//     title: "",
//     description: "",
//     imageUrl: "",
//   });

//   // State to track the item being edited
//   const [editItemId, setEditItemId] = useState(null);

//   // Handle form input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewItem({ ...newItem, [name]: value });
//   };

//   // Handle form submit to create or update item
//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (editItemId) {
//       // Update the item
//       setItems(
//         items.map((item) =>
//           item.id === editItemId ? { ...item, ...newItem } : item
//         )
//       );
//       setEditItemId(null);
//     } else {
//       // Create a new item
//       setItems([...items, { ...newItem, id: items.length + 1 }]);
//     }
    
//     // Reset form
//     setNewItem({ title: "", description: "", imageUrl: "" });
//   };

//   // Handle item delete
//   const handleDelete = (id) => {
//     setItems(items.filter((item) => item.id !== id));
//   };

//   // Handle edit click
//   const handleEdit = (item) => {
//     setEditItemId(item.id);
//     setNewItem({ title: item.title, description: item.description, imageUrl: item.imageUrl });
//   };

//   return (
//     <div className="container mx-auto p-6">
//       {/* Form to Add or Edit Item */}
//       <form onSubmit={handleSubmit} className="mb-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <input
//             type="text"
//             name="title"
//             placeholder="Title"
//             value={newItem.title}
//             onChange={handleChange}
//             className="p-2 border rounded-md"
//             required
//           />
//           <input
//             type="text"
//             name="description"
//             placeholder="Description"
//             value={newItem.description}
//             onChange={handleChange}
//             className="p-2 border rounded-md"
//             required
//           />
//           <input
//             type="text"
//             name="imageUrl"
//             placeholder="Image URL"
//             value={newItem.imageUrl}
//             onChange={handleChange}
//             className="p-2 border rounded-md"
//             required
//           />
//           <button type="submit" className="p-2 bg-blue-500 text-white rounded-md">
//             {editItemId ? "Update Item" : "Add Item"}
//           </button>
//         </div>
//       </form>

//       {/* Displaying the items */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {items.map((item) => (
//           <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//             <img
//               src={item.imageUrl}
//               alt={item.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold">{item.title}</h3>
//               <p className="text-gray-600">{item.description}</p>
//               <div className="flex justify-between mt-4">
//                 <button
//                   className="text-blue-500"
//                   onClick={() => handleEdit(item)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="text-red-500"
//                   onClick={() => handleDelete(item.id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
