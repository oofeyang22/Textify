// seedPosts.js
import mongoose from "mongoose";
import { Post } from "./src/lib/models.js"
import dotenv from "dotenv";

dotenv.config();

// Sample blog posts data with Picsum images
const samplePosts = [
  {
    title: "Getting Started with Next.js 14",
    desc: "Next.js 14 introduces several powerful features including Server Components, improved performance, and simplified data fetching. In this comprehensive guide, we'll explore how to leverage these new capabilities to build faster, more efficient web applications. Learn about the App Router, React Server Components, and the new streaming capabilities that make Next.js a top choice for modern web development. We'll also cover practical examples including data fetching patterns, error handling, and loading states that you can immediately apply to your projects.",
    img: "https://picsum.photos/id/0/800/400", // Laptop with code
    slug: "getting-started-with-nextjs-14",
    userId: "66b753d3fbf1b3024c40964a", // Replace with actual user ID
  },
  {
    title: "Understanding MongoDB Schema Design",
    desc: "Proper schema design is crucial for MongoDB performance. This article covers best practices for embedding vs referencing, indexing strategies, and how to structure your data for optimal query performance. We'll look at real-world examples of one-to-one, one-to-many, and many-to-many relationships. Learn about the trade-offs between data duplication and query complexity, and discover patterns for handling hierarchical data, tagging systems, and time-series data in MongoDB.",
    img: "https://picsum.photos/id/1/800/400", // Laptop on desk
    slug: "understanding-mongodb-schema-design",
    userId: "66b61c816b23c49fcf9c6701", // Replace with actual user ID
  },
  {
    title: "CSS Modules vs Tailwind CSS: A Practical Comparison",
    desc: "Both CSS Modules and Tailwind CSS offer unique approaches to styling React applications. CSS Modules provide locally scoped CSS classes, preventing naming conflicts and making styles predictable. Tailwind offers utility-first classes that enable rapid development without leaving your HTML. In this comparison, we'll explore the pros and cons of each, performance considerations, bundle size impact, and when to choose one over the other. Includes practical examples and code snippets to help you make an informed decision for your next project.",
    img: "https://picsum.photos/id/2/800/400", // Trees/forest (nature coding)
    slug: "css-modules-vs-tailwind-css",
    userId: "66b61e5f6b23c49fcf9c6704", // Replace with actual user ID
  },
  {
    title: "Building RESTful APIs with Next.js App Router",
    desc: "Next.js provides powerful API routes that make building RESTful endpoints straightforward, especially with the new App Router. This comprehensive tutorial walks through creating CRUD operations, handling authentication middleware, validating request data with Zod, and organizing your API routes for maintainability. We'll cover route handlers, dynamic routes, middleware for authentication, error handling patterns, and best practices for production-ready APIs. Perfect for developers building full-stack applications with Next.js.",
    img: "https://picsum.photos/id/3/800/400", // Person typing
    slug: "building-restful-apis-with-nextjs",
    userId: "66f80bd6303d653fcacde57a", // Replace with actual user ID
  },
  {
    title: "Authentication Strategies in Modern Web Apps",
    desc: "From JWT to session-based auth and OAuth providers, choosing the right authentication strategy is critical for security and user experience. This guide compares popular authentication methods including JWT, sessions, OAuth 2.0, and emerging standards like WebAuthn. We'll discuss security considerations like CSRF protection, XSS prevention, and secure cookie settings. Implementation examples using NextAuth.js, bcrypt for password hashing, and proper session management techniques for Next.js applications are included.",
    img: "https://picsum.photos/id/4/800/400", // Nature/water
    slug: "authentication-strategies-modern-web",
    userId: "66b753d3fbf1b3024c40964a", // Replace with actual user ID
  },
  {
    title: "Optimizing Images in Next.js Applications",
    desc: "The Next.js Image component offers automatic optimization, lazy loading, and responsive images out of the box. Learn how to configure remote image domains, use proper sizing with the `sizes` attribute, implement blur-up placeholders for better perceived performance, and reduce Largest Contentful Paint (LCP) with these advanced optimization techniques. We'll cover the Image component API, optimization trade-offs, working with external image sources, and strategies for handling user-uploaded content efficiently.",
    img: "https://picsum.photos/id/5/800/400", // Landscape/valley
    slug: "optimizing-images-nextjs",
    userId: "66b61c816b23c49fcf9c6701", // Replace with actual user ID
  },
  {
    title: "Deploying Next.js to Production: A Complete Guide",
    desc: "Whether you choose Vercel, Netlify, Cloudflare Pages, or self-hosted solutions like Docker and PM2, deploying Next.js requires careful configuration. This guide covers environment variable management, build settings optimization, edge functions for global performance, monitoring and analytics tools, and CI/CD pipeline setup. Learn about preview deployments, rollback strategies, performance monitoring with Sentry and LogRocket, and ensuring your production deployment runs smoothly under load.",
    img: "https://picsum.photos/id/6/800/400", // Mountains
    slug: "deploying-nextjs-production",
    userId: "66b61e5f6b23c49fcf9c6704", // Replace with actual user ID
  },
  {
    title: "State Management in React: Context vs Redux vs Zustand",
    desc: "State management choices can make or break your React application's maintainability and performance. This article compares three popular solutions - Context API, Redux Toolkit, and Zustand - analyzing bundle size impact, performance characteristics, developer experience, learning curve, and ideal use cases for each approach. We'll build the same feature with each solution, comparing code complexity, debugging experience, and scalability patterns. Perfect for teams deciding on their state management strategy.",
    img: "https://picsum.photos/id/7/800/400", // City/urban
    slug: "state-management-react-context-redux-zustand",
    userId: "66f80bd6303d653fcacde57a", // Replace with actual user ID
  },
  {
    title: "Mastering MongoDB Aggregation Pipeline",
    desc: "The MongoDB aggregation pipeline is a powerful tool for data processing and analysis. This deep dive covers stages like $match, $group, $lookup for joins, $unwind for array processing, and $project for reshaping documents. Learn about pipeline optimization, using indexes effectively, and building complex analytical queries. Real-world examples include generating sales reports, building recommendation engines, and creating real-time dashboards with change streams and aggregation.",
    img: "https://picsum.photos/id/8/800/400", // Canyon/desert
    slug: "mastering-mongodb-aggregation-pipeline",
    userId: "66b753d3fbf1b3024c40964a", // Replace with actual user ID
  },
  {
    title: "Error Handling Patterns in Next.js Applications",
    desc: "Robust error handling separates professional applications from hobby projects. This guide covers error boundaries in React, global error handling in API routes, custom error pages (404, 500), error logging and monitoring, user-friendly error messages, and recovery strategies. We'll implement comprehensive error handling that gracefully degrades and provides excellent user experience even when things go wrong.",
    img: "https://picsum.photos/id/9/800/400", // River/water
    slug: "error-handling-patterns-nextjs",
    userId: "66b61c816b23c49fcf9c6701", // Replace with actual user ID
  },
  {
    title: "Server Components vs Client Components in React 19",
    desc: "React 19 and Next.js 14 have revolutionized how we think about component rendering. Server Components allow for zero-bundle-size rendering on the server, while Client Components provide interactivity. This guide explains when to use each, how they work together, performance implications, and common patterns like the 'use client' directive. Learn to build hybrid applications that load faster and provide better user experiences.",
    img: "https://picsum.photos/id/10/800/400", // Forest path
    slug: "server-vs-client-components-react-19",
    userId: "66b61e5f6b23c49fcf9c6704", // Replace with actual user ID
  },
  {
    title: "Database Indexing Strategies for Performance",
    desc: "Proper indexing can make your database queries 100x faster. This article covers single-field indexes, compound indexes, multikey indexes, and text indexes in MongoDB. Learn about index selectivity, covering queries, and how to use explain() to analyze query performance. Real-world examples show how to identify slow queries and add the right indexes to fix them.",
    img: "https://picsum.photos/id/11/800/400", // Desert landscape
    slug: "database-indexing-strategies-performance",
    userId: "66f80bd6303d653fcacde57a", // Replace with actual user ID
  },
];

// Helper function to generate random date within last 30 days
const getRandomDate = (startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)) => {
  const endDate = new Date();
  return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
};

// Main seed function
async function seedPosts() {
  let connection;
  
  try {
    // Connect to MongoDB
    console.log("🔌 Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO);
    connection = mongoose.connection;
    console.log("✅ Connected to MongoDB successfully!");
    
    // Check existing posts
    const existingPosts = await Post.countDocuments();
    console.log(`📊 Existing posts in database: ${existingPosts}`);
    
    if (existingPosts > 0) {
      console.log(`\n⚠️  WARNING: Database already has ${existingPosts} posts!`);
      console.log("   This script will SKIP existing posts and only add new ones.");
      console.log("   To replace all posts, delete them first or modify this script.\n");
    }
    
    // Add posts one by one to avoid duplicate key errors
    console.log("📝 Adding new posts...");
    let addedCount = 0;
    let skippedCount = 0;
    
    for (const postData of samplePosts) {
      try {
        // Check if post with same slug already exists
        const existingPost = await Post.findOne({ slug: postData.slug });
        
        if (existingPost) {
          console.log(`   ⏭️  Skipped: "${postData.title}" (slug already exists)`);
          skippedCount++;
          continue;
        }
        
        // Create new post with random date
        const post = new Post({
          ...postData,
          createdAt: getRandomDate(),
          updatedAt: new Date(),
        });
        
        await post.save();
        console.log(`   ✅ Added: "${postData.title}"`);
        addedCount++;
      } catch (error) {
        if (error.code === 11000) {
          console.log(`   ⚠️  Skipped: "${postData.title}" (duplicate slug or title)`);
          skippedCount++;
        } else {
          console.error(`   ❌ Error adding "${postData.title}":`, error.message);
        }
      }
    }
    
    // Display summary
    console.log("\n" + "=".repeat(60));
    console.log("🎉 SEEDING COMPLETED!");
    console.log("=".repeat(60));
    console.log("\n📋 Summary:");
    console.log(`   ✅ Added: ${addedCount} new posts`);
    console.log(`   ⏭️  Skipped: ${skippedCount} existing posts`);
    console.log(`   📊 Total posts now: ${await Post.countDocuments()}`);
    
    if (addedCount > 0) {
      console.log("\n💡 Next Steps:");
      console.log("   1. Run `npm run dev` to start your application");
      console.log("   2. Visit http://localhost:3000/blog to see your new posts");
      console.log("\n📸 Images are from Picsum (free stock photos):");
      console.log("   https://picsum.photos/");
    }
    
  } catch (error) {
    console.error("\n❌ ERROR DURING SEEDING:");
    console.error(error);
    
    if (error.name === 'MongoServerError' && error.code === 8000) {
      console.error("\n⚠️  This might be an authentication issue. Check your MONGODB_URI in .env");
    } else if (error.name === 'MongooseServerSelectionError') {
      console.error("\n⚠️  Cannot connect to MongoDB. Make sure MongoDB is running and your connection string is correct.");
    }
    
    process.exit(1);
  } finally {
    // Close connection
    if (connection) {
      await mongoose.disconnect();
      console.log("\n🔌 Disconnected from MongoDB");
    }
  }
}

// Run the seed function
seedPosts();