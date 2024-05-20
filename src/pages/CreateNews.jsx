// import React, { useState } from 'react';

// function NewsForm() {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [image, setImage] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('content', content);
//     formData.append('image', image);

//     try {
//       const response = await fetch('/api/news', {
//         method: 'POST',
//         body: formData,
//       });
//       // Handle response as needed
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
//       <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content"></textarea>
//       <input type="file" onChange={(e) => setImage(e.target.files[0])} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default NewsForm;
