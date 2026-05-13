import "../../chunks/async.js";
import { x as attr_class, y as bind_props, z as attr_style, w as slot, F as attr, G as ensure_array_like, J as head } from "../../chunks/index.js";
import { j as fallback } from "../../chunks/utils2.js";
import "clsx";
import { e as escape_html } from "../../chunks/context.js";
import { g as getInstagramPosts } from "../../chunks/InstagramFeedSection.remote.js";
function WavyDivider($$renderer, $$props) {
  let direction = fallback($$props["direction"], "right");
  $$renderer.push(`<div class="divider svelte-95qv8p"><div${attr_class("line svelte-95qv8p", void 0, {
    "wave-left": direction === "left",
    "wave-right": direction === "right"
  })}></div></div>`);
  bind_props($$props, { direction });
}
function WebGL($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<canvas id="gl-canvas" width="1080" height="540" class="svelte-32mfyr"></canvas>`);
  });
}
function HeroSection($$renderer) {
  $$renderer.push(`<div id="hero" class="svelte-1gggh3h">`);
  WebGL($$renderer);
  $$renderer.push(`<!----></div>`);
}
function Section($$renderer, $$props) {
  let { title, children, alt = false, overflow = false } = $$props;
  $$renderer.push(`<section class="page-section svelte-el83a2"${attr_style(overflow ? "" : "max-width:50rem; padding:1rem;")}><div class="header svelte-el83a2"><h1 class="svelte-el83a2">${escape_html(title)}</h1> `);
  WavyDivider($$renderer, { direction: alt ? "left" : "right" });
  $$renderer.push(`<!----></div> `);
  children?.($$renderer);
  $$renderer.push(`<!----></section>`);
}
function SectionBody($$renderer, $$props) {
  $$renderer.push(`<div class="svelte-sfr9ue"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></div>`);
}
function ContactSection($$renderer) {
  Section($$renderer, {
    title: "Contact",
    children: ($$renderer2) => {
      SectionBody($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<p class="svelte-10hu88h">Feel free to send me an email at <br/><a href="mailto:lukas@lukashahn.art" class="svelte-10hu88h">lukas@lukashahn.art</a><br/> <br/> or DM me on Instagram <br/><a href="https://instagram.com/lukashahnart" class="svelte-10hu88h">@lukashahnart</a>.<br/></p>`);
        },
        $$slots: { default: true }
      });
    }
  });
}
function IntersectionObserver_1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let element = fallback($$props["element"], null);
    let once = fallback($$props["once"], false);
    let intersecting = fallback($$props["intersecting"], false);
    let root = fallback($$props["root"], null);
    let rootMargin = fallback($$props["rootMargin"], "0px");
    let threshold = fallback($$props["threshold"], 0);
    let entry = fallback($$props["entry"], null);
    let observer = fallback($$props["observer"], null);
    $$renderer2.push(`<!--[-->`);
    slot($$renderer2, $$props, "default", { intersecting, entry, observer });
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, {
      element,
      once,
      intersecting,
      root,
      rootMargin,
      threshold,
      entry,
      observer
    });
  });
}
function InstagramFeedMediaItem($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { timestamp, media_url, isCurrent = true } = $$props;
    let intersecting = false;
    let element = void 0;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      IntersectionObserver_1($$renderer3, {
        rootMargin: "-200px",
        element,
        get intersecting() {
          return intersecting;
        },
        set intersecting($$value) {
          intersecting = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div${attr_class(`inner-container carousel-item ${!isCurrent ? "hidden" : ""}`, "svelte-zt0ud")}><div class="side-text svelte-zt0ud"><p>@lukashahnart</p> <p>${escape_html(new Date(timestamp).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }))}</p></div> <div style="width: 100%; background-color:var(--foreground-color);"><img${attr("src", media_url)} alt=""/></div></div>`);
        },
        $$slots: { default: true }
      });
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
function InstagramFeedRow($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { post } = $$props;
    let currentItemIndex = 0;
    let windowWidth = 0;
    let imageWidth = Math.min(windowWidth * 0.75, 30 * 16);
    $$renderer2.push(`<div class="row svelte-y2q0f0"${attr_style(`--image-width: ${imageWidth}px`)}>`);
    if (post.children) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(post.children);
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let media = each_array[i];
        $$renderer2.push(`<div class="image svelte-y2q0f0">`);
        InstagramFeedMediaItem($$renderer2, {
          timestamp: post.timestamp,
          media_url: media.media_url,
          isCurrent: currentItemIndex == i
        });
        $$renderer2.push(`<!----></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="image svelte-y2q0f0">`);
      InstagramFeedMediaItem($$renderer2, {
        timestamp: post.timestamp,
        media_url: post.media_url
      });
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function InstagramFeedSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var posts;
    var $$promises = $$renderer2.run([
      async () => posts = await getInstagramPosts(),
      () => void 0
    ]);
    Section($$renderer2, {
      title: "Instagram",
      alt: true,
      overflow: true,
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="posts-container svelte-hylqy5"><!--[-->`);
        $$renderer3.async_block([$$promises[0]], ($$renderer4) => {
          const each_array = ensure_array_like(posts.filter((e) => {
            return e.media_type === "IMAGE" || e.media_type === "CAROUSEL_ALBUM";
          }));
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let post = each_array[$$index];
            $$renderer4.async_block([$$promises[1]], ($$renderer5) => {
              InstagramFeedRow($$renderer5, { post });
            });
          }
        });
        $$renderer3.push(`<!--]--></div>`);
      }
    });
    $$renderer2.push(`<!----> <div class="intersection-element-container svelte-hylqy5"><div id="intersection-element" hidden="" class="svelte-hylqy5"></div></div>`);
  });
}
function ServiceSection($$renderer) {
  Section($$renderer, {
    title: "Services",
    children: ($$renderer2) => {
      SectionBody($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<div style="display:flex; flex-direction:column; gap: 1.5rem; max-width: 30rem;margin: auto;"><div><h2>Video</h2> <p style="font-size: 1.4rem; line-height: 1.8rem;">Filming + editing for events, interviews, promotional videos, weddings, music videos, and
					more.</p></div> <div><h2>Photo</h2> <p style="font-size: 1.4rem; line-height: 1.8rem;">Event coverage, portraits, and real estate photography.</p></div> <div><h2>Drone</h2> <p style="font-size: 1.4rem; line-height: 1.8rem;">Aerial photography and videography for events, real estate, and more.</p></div> <div><h2>Web</h2> <p style="font-size: 1.4rem; line-height: 1.8rem;">Simple, functional websites—designed and built from scratch.</p></div></div>`);
        },
        $$slots: { default: true }
      });
    }
  });
}
function _page($$renderer) {
  head("1uha8ag", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Professional Photography &amp; Videography in Roseburg, Oregon | Lukas Hahn</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Lukas Hahn is a professional photographer and videographer based in Roseburg, Oregon. Specializing in portraits, events, weddings, and creative visual storytelling across the Pacific Northwest."/> <link rel="canonical" href="https://www.lukashahn.art/"/> <meta property="og:type" content="website"/> <meta property="og:title" content="Professional Photography &amp; Videography in Roseburg, Oregon | Lukas Hahn"/> <meta property="og:description" content="Professional photography and videography services in Roseburg, Oregon. Capture your story with creativity and quality."/> <meta property="og:url" content="https://www.lukashahn.art/"/> <meta property="og:image" content="https://www.lukashahn.art/opengraph.png"/> <meta property="og:site_name" content="Lukas Hahn Photography &amp; Videography"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title" content="Lukas Hahn | Photography &amp; Videography in Roseburg, Oregon"/> <meta name="twitter:description" content="Capture your moments with creative photography and videography in Roseburg, Oregon and the Pacific Northwest."/> <meta name="twitter:image" content="https://www.lukashahn.art/opengraph.png"/> <script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "LocalBusiness",
			"name": "Lukas Hahn Photography & Videography",
			"image": "https://www.lukashahn.art/opengraph.png",
			"url": "https://www.lukashahn.art",
			"telephone": "+1-541-430-3372",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "",
				"addressLocality": "Roseburg",
				"addressRegion": "OR",
				"postalCode": "",
				"addressCountry": "US"
			},
			"priceRange": "$$",
			"sameAs": ["https://www.instagram.com/lukashahnart", "https://www.youtube.com/@lukashahnart"],
			"description": "Professional photography and videography services based in Roseburg, Oregon — offering creative visuals for portraits, weddings, events, and businesses across the Pacific Northwest."
		}
	<\/script>`);
  });
  $$renderer.push(`<main class="svelte-1uha8ag">`);
  HeroSection($$renderer);
  $$renderer.push(`<!----> <section id="about" class="svelte-1uha8ag"><h1 class="svelte-1uha8ag">About</h1> `);
  WavyDivider($$renderer, { direction: "left" });
  $$renderer.push(`<!----> <p style="font-size: 1.4rem; line-height: 2rem; margin-bottom: 2rem;" class="svelte-1uha8ag"><span style="display: block;">I'm <span style="font-family:Caprasimo; font-size:3.8rem">Lukas Hahn</span>,</span> <span style="display: block; padding:0.5rem;">a <span style="font-weight: 500; font-size:2.2rem">photographer</span> and <span style="font-weight: 500; font-size:2.2rem">videographer</span> from</span> <span style="margin-top:1rem; display:block; font-family: Borel; font-size:2.8rem; line-height:3.5rem;">The Pacific Northwest.</span></p> <p class="svelte-1uha8ag"><span style="font-family: Caprasimo; font-size:2rem; display:block;">Since I was a kid...</span> ... I’ve had a passion for capturing life—mine and others'—in fun, creative ways. When I was 10,
			I bought my first camera: an old GoPro I used for years to film family moments and make little
			YouTube videos. I learned photography on my mom’s old camera, telling stories through pictures
			of the LEGO builds I loved. Since then, I’ve started taking my hobby more seriously. I’ve worked
			on all kinds of photo and video projects—from sports and events to interviews, promotional pieces,
			weddings, and music videos for local artists.</p></section> `);
  ContactSection($$renderer);
  $$renderer.push(`<!----> `);
  ServiceSection($$renderer);
  $$renderer.push(`<!----> `);
  InstagramFeedSection($$renderer);
  $$renderer.push(`<!----></main>`);
}
export {
  _page as default
};
