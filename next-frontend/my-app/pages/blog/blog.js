import Image from "next/image";
import localFont from "next/font/local";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import Head from "next/head";
import Script from "next/script";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";





export async function getServerSideProps(context) {
    try {
      // Create a client for Sanity
      const client = createClient({
        projectId: 'rp1gsa2e', // Replace with your actual project ID
        dataset: 'production', // Replace with your actual dataset name
        useCdn: false, // Use CDN for faster response
        apiVersion: '2023-10-22', // Use a specific API version for stability
      });
  
      // Define your query, adjust as per your schema
      const query = `*[_type == "blog"]{
        title,
        content
      }`;
  
      // Fetch data from Sanity
      const blogs = await client.fetch(query);
      console.log("Fetched blogs:", blogs);
  
      return {
        props: {
          blogs: blogs || [], // Ensure blogs is an array
        },
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        props: {
          blogs: [], // Return an empty array on error
        },
      };
    }
  }
  
  