---
title: Overview
meta:
  title: Data buckets overview
  description: Learn what are Mockoon's data buckets, how they work, what type of content is supported and how to create one
order: 950
---

# Data buckets overview

---

## What are data buckets?

In Mockoon, a data bucket is a **key value store** where you can create reusable content or data for your routes.

The data buckets are defined at the **environment level** and are **generated when the server starts**. It means that their state **persists between each call** ([see below](#data-buckets-generation)).

## Create a data bucket

To create a new data bucket, open the **Data** options by clicking on the tab at the top of the window:

![Open data bucket view{755x160}](docs-img:open-data-view.png)

Add a new data bucket by clicking on the "plus" button:

![Add a data bucket{1264x578}](docs-img:add-data-bucket.png)

You can change the data bucket title and content on the right part of the screen.
Mockoon will automatically attribute a new **unique ID** to your data bucket. You can use this ID to reference the data using the [`data` helpers](docs:data-buckets/using-data-buckets#using-data-helpers). To retrieve a bucket's unique ID, look in the footer under the data bucket content or right-click on a bucket name in the list and click on "Copy ID to clipboard".

## Content of a data bucket

Data buckets can contain any text content. They also support all of Mockoon's [templating helpers](docs:templating/overview).
Mockoon will always try to parse the data bucket's content from JSON to allow you to reference only part of it using the [`data` helpers](docs:data-buckets/using-data-buckets#using-data-helpers).

## Data buckets generation

Data buckets are generated when the server starts, and their state persist during all mock API calls. To regenerate a data bucket's content, restart the mock server.

If a data bucket contains [request helpers](docs:templating/mockoon-request-helpers), Mockoon will generate the bucket content only after the first call made to a route using this data bucket (by referencing it directly or using a data helper). It allows you to create bucket "configuration" routes that you can call programmatically with the content you want to reuse in your bucket using the request helpers (`body`, `queryParams`, etc.).
