import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blog");
  const posts = blog.filter((post) => post.id.startsWith("en/"));

  return rss({
    title: "Bassam Ahmad -- Blog",
    description:
      "Notes on AI, computer vision, robotics, and mechatronics.",
    site: context.site + "en",
    customData: `
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>Astro</generator>
    <atom:link href="${context.site}en/rss.xml" rel="self" type="application/rss+xml" />
    <atom:link href="${context.site}ar/rss.xml" rel="alternate" type="application/rss+xml" title="مدونة بسام أحمد" hreflang="ar" />
    <copyright>Copyright ${new Date().getFullYear()} Bassam Ahmad. All rights reserved.</copyright>
    <managingEditor>bassam.essam.ahmad@gmail.com</managingEditor>
    <webMaster>bassam.essam.ahmad@gmail.com</webMaster>
    <ttl>60</ttl>
    `,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/en/blog/${post.id.split("/")[1]}/`,
      customData: `
        ${post.data.tags ? post.data.tags.map((tag) => `<category><![CDATA[${tag}]]></category>`).join("") : ""}
        ${post.data.author ? `<author>${post.data.author}</author>` : ""}
        ${post.data.author ? `<dc:creator><![CDATA[${post.data.author}]]></dc:creator>` : ""}
        ${post.data.image?.url ? `<media:thumbnail url="${context.site}${post.data.image.url.replace(/^\//, "")}" />` : ""}
      `,
    })),
  });
}
