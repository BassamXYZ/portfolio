import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

// media:thumbnail & atom:link not work

export async function get(context) {
  const blog = await getCollection('blog');
    const filteredPosts = blog.filter((page) => {
    const [postLang, ...slug] = page.slug.split("/");
    if (postLang == "ar") {
      return page;
    }
    });
  
  return rss({
    title: 'مدونة بسام احمد',
    description: 'مدونة شخصية عن اهتماماتي مثل البرمجة, الرياضيات, التكنلوجيا, والألعاب',
    site: context.site + "ar",
    customData: `
      <language>ar-sa</language>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <generator>Astro</generator>
      <docs>https://www.rssboard.org/rss-specification</docs>
      <atom:link href="${context.site}ar/rss.xml" rel="self" type="application/rss+xml" />
      <atom:link href="${context.site}en/rss.xml" rel="alternate" type="application/rss+xml" title="Bassam Ahmad blog" hreflang="en" />
      <copyright>حقوق النشر ${new Date().getFullYear()} مدونة بسام احمد. جميع الحقوق محفوظة.</copyright>
      <managingEditor>contact@bassamahmad.com</managingEditor>
      <webMaster>contact@bassamahmad.com</webMaster>
      <ttl>60</ttl>
      <image>
        <url>${context.site}favicon.ico</url>
        <title>شعار المدونة</title>
        <link>${context.site}شق<link>
      </image>
    `,
    items: filteredPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/ar/blog/${post.slug.split('/')[1]}/`,
      customData: `
        ${post.data.tags ? post.data.tags.map(tag =>
          `<category><![CDATA[${tag}]]></category>`
        ).join(''):''}
        ${post.data.author? `<author>${post.data.author}</author>`: ''}
        ${post.data.author? `<dc:creator><![CDATA[${post.data.author}]]></dc:creator>`: ''}
        ${post.data.image ? `
          <media:thumbnail url="${context.site + post.data.image.url}" />
          <enclosure url="${context.site + post.data.image.url}" type="image/webp" />
          ` : ''}
        <atom:link href="${context.site}en/${post.data.url}" rel="alternate" hreflang="en" />
    `,
    })),
  });
}
