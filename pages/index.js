import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Jayesh Kulkarni. I'm a software engineer. You can contact me on <Link href={'https://www.linkedin.com/in/jayesh-kulkarni-16b6711b0/'}>linkedin.</Link></p>
        
      </section>
    </Layout>
  );
}

// import { useState } from 'react';

// export default function Home() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch('/api/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();
//       if (data.success) {
//         alert('User created successfully!');
//       } else {
//         alert('Error: ' + data.error);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Failed to create user.');
//     }
//   };

//   return (
//     <div>
//       <h1>Create User</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <button type="submit">Create</button>
//       </form>
//     </div>
//   );
// }
