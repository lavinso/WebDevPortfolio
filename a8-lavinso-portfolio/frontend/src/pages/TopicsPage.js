import React from 'react';
import { IoNewspaperOutline } from "react-icons/io5";
           
function TopicsPage() {
    return (
        <>
          <h2>Web Development Concepts</h2>
            <nav class="local">
                    <a href="#servers">Web Servers</a>
                    <a href="#frontend">Frontend Design</a>
                    <a href="#images">Image Optimization</a>
                    <a href="#favicon">Favicons</a>
                    <a href="#cascadingstylesheets">Cascading Syle Sheets</a>
                    <a href="#forms">Forms</a>
                    <a href="#node">Node, NPM, and Express</a>
                    
            </nav>

            <article id="servers"> 
                <h3> Web Servers</h3>
                <p> A website hosted on a web server consists of multiple webpages, with each webpage saved as a separate file.  When a user types a <strong>uniform resource locator (URL)</strong> into a web browser, the browser sends a <strong>GET request</strong> to the <strong>host server</strong> for the requested webpage. The requested webpage is identified by the <strong>path</strong> component of the URL. If no path is specified, the web server by default returns the file named <strong>index </strong>(usually <samp>index.html</samp>, though sometimes <samp>index.php</samp>, <samp>index.js</samp>, or <samp>index.asp </samp>depending on the website and configuration of the web server). In other words, most web servers are designed so that a GET request containing a URL with the path of / is mapped to the file at the path <samp>index.html</samp>. Some web servers, such as Microsoft’s .NET, use default instead of index. However, index is the most commonly used. The default page is commonly known as the ‘home’ page and often contains an overview of the website and links to the other pages on the site. If an <samp>index.html </samp>file does not exist for the website, the web server may instead, by default, display a directory structure that contains information about the website that is usually hidden. Thus, it is best practice to create a default file named index to serve as the designated home page, which will provide a seamless user experience.</p>
                
                <p> The network details are similar between the local computer and the web server in that they contain the same basic components, such as the <strong>request URL, request method, status code, request headers,</strong> and <strong>response headers </strong>. However, the key differences between the two are the URL in the HTTP request, the IP address on the web server, and the additional response and request headers on the web server. The request method is <samp>GET</samp> and the status/response code is <samp>200</samp> for both files, indicating that the request to retrieve information was successfully completed on both the local computer and the web server. The request URL on the local server includes the protocol <samp>file</samp> and the file path to the document on the local computer. However, on the web server, the request URL includes the protocol <samp>HTTPS</samp>, the host server name, and a path to the location of the file on the host server. The inspector tools on the web server also contain additional response headers (though <samp>content-type</samp> and <samp>last-modified</samp> keywords are present on both). A few of the response header keywords included on the web server include: <samp>accept-ranges, connection, content-encoding, content-length, date, tag, keep-alive, server,</samp> and <samp>vary</samp>. There are also more request headers on the web server, including the keywords: <samp>accept, accept-encoding, accept-language, cache-control, connection, cookie, host, if-modified-since, if-none-match,</samp> and <samp>user-agent</samp>. Both have the keywords: <samp>Sec-Ch-Ua, Sec-Ch-Ua-Mobile, </samp>and <samp>Sec-Ch-Ua-Platform</samp>. The <samp>initiator</samp> and <samp>timing</samp> are different between the local computer and web server, with the <samp>initiator</samp> reflecting the differences in the request URL and the <samp>timing</samp> reflecting the processing time for the request to travel from the local computer to the web server and back.</p>

                <p> The main.css and main.js files do not have a status of <samp>200</samp> because they do not yet exist. The files are linked in the <code>&lt;head&gt;</code> HTML element of the file, which causes them to be included in the HTTP request and appear in the developer tools. However, the author has not yet created these files, or they are not yet ready to be deployed on the web server. The web server cannot retrieve files that do not exist, resulting in the status code <samp>404</samp>, a <samp>"file not found" </samp> error. Web servers return this error to aid in troubleshooting and identify missing resources. Since the CSS and JS files are missing, the webpage may lack the desired visual styles or interactive features. The <samp>favicon.ico</samp> file, on the other hand, does exist on the host web server. Thus, the status code for the <samp>favicon.ico</samp> file is <samp>200</samp> because the web server successfully retrieves the icon and displays it in the browser’s tab. </p>

                <p> The URL for the student’s ENGR web server is: <code>https://web.engr.oregonstate.edu/~lavinso/a1-lavinso/</code>. The <strong>scheme</strong> or <strong> protocol</strong> is <samp>HTTPS</samp>, indicating the communication protocol the web browser must use to request the resource on the web. The host domain, or the server where the file is hosted, is <samp>oregonstate.edu</samp>. The <strong>subdomains</strong> are <samp>web</samp> and <samp>engr</samp>. The <strong>port</strong> is not indicated in this URL, but the default port for an HTTPS request is <samp>443</samp>. The path to the resource is <samp>/~lavinso/a1-lavinso/</samp>. Since the path ends in a slash, /, the default file that will be retrieved is the <samp>index.html</samp> file in the <samp>a1-lavinso</samp> folder. In the path, ~lavinso, the tilde symbol is commonly shorthand for home directory. Thus, ~lavinso, represents the home directory of the user account named lavinso.  Furthermore, a1-lavinso is a folder within the lavinso home directory. Together, the path /~lavinso/a1-lavinso/ identifies the location of the file being requested on the server. There are no <strong>query parameters</strong> or <strong>anchors</strong> in this URL. </p>
            </article>
            
            <article id="frontend">
                <h3> Frontend Design</h3>
                <p> <strong>Frontend design</strong> is the development of the visual design, graphical user interface (GUI), and interactive experience of a website. The goal is to create positive user experiences through an aesthetically pleasing and engaging user interface. Frontend designers must translate project requirements and goals into a visually appealing and user-friendly design. This often involves consistent color and font schemes, relevant images and animations, and sensible navigation systems. Frontend designers must make decisions regarding how the content of the website is organized, what fonts and colors are used, how the navigation menu is structured, and where various elements like images, buttons, and forms are placed. Tools like HTML, CSS, and JavaScript are used to implement design choices and interactive elements. With good frontend design, users are drawn to the website and encouraged to explore further. </p>
                    
                <p> The <strong>Five E's of Usability </strong> provide a framework to guide user-centered website design that prioritizes the specific needs and preferences of the intended users. </p>
                <dl>
                    <dt><strong>Effective</strong></dt>    
                    <dd>The effectiveness of a website describes how accurately and completely it helps users meet their goal(s). Displaying information in a concise and coherent manner and providing intuitive navigation can help users accomplish their intended tasks. </dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>The efficiency of a website relates to how quickly users can accomplish their tasks and how many steps are required to do so. For example, many online merchants offer customers a "one-click" checkout experience, which has improved efficiency over online purchasing methods that require multiple pages to be loaded for checkout. </dd>
                    <dt><strong>Easy to navigate</strong></dt>
                    <dd>A website that is easy to navigate allows new users to quickly learn and start using the website effectively. The interfaces should be intuitive and require minimal effort to learn and remember. Familiar icons, consistent design patterns, and contextual help can make a website easier to learn.  </dd>
                    <dt><strong>Error-free</strong></dt>
                    <dd>Errors can delay or prevent users from achieving their goal(s) and negatively impact the user experience. The goal is to anticipate, prevent, and recover from user errors. Clear instructions, helpful error messages, and validation checks can help reduce the number of errors a user encounters.</dd>
                    <dt><strong>Enjoyable to use or Engaging</strong></dt>
                    <dd>Engagement relates to the overall user experience. An engaging website has high levels of user interest, enjoyment, and satisfaction. This often involves incorporating personalized experiences (through images, animations, and/or interactive features) that are intended to fit the needs of a specific audience. The goal is to captivate and retain users' attention. </dd>
                    </dl>
                <p> <strong>Page layout tags</strong> in HTML are utilized to structure and organize the content within a webpage. Browsers display these block-level elements with a newline before and after the element. While the exact look of the tag depends on the styles applied to it using CSS, page layout tags provide a method to define the overall layout, sections, and positioning of elements on the page. With HTML 5, new, more meaningful, and descriptive names for page layout tags were created to describe areas of a page. These new tags aid in the structure and organization of webpages. They also assist search engine robots and screen readers in understanding the content and relationships between different sections of a webpage. When used effectively, page layout tags can promote readability, accessibility, and logical organization of content. </p>
               
                <p> <strong>Anchors</strong>, or <code>&lt;a&gt;</code> tags, can be used to link from one page to another page or from one location on the page to another location on the same page. </p>
                <ol>
                    <li>To link to external content: 
                        <ul>
                            <li>Use the anchor tag with the <strong>href attribute</strong> to specify the URL. </li>
                            <li> The URL should reflect the <strong>absolute path</strong> to the resource, which is the exact location of the file. It includes the protocol, subdomains, host server, and path (which consists of any directory or folder and file names). </li> 
                            <li>Example: <code>&lt;a href="https://oregonstate.edu"&gt; Oregon State University Website&lt;/a&gt;</code> takes a user to the Oregon State University webpage when they click on the text <samp>"Oregon State University Website"</samp>.</li>
                        </ul> 
                    </li> 
                    <li>To link to internal content within the same page:
                        <ul>
                            <li>Add a unique anchor <strong>id attribute</strong> to the content you would like to link to. For example, <code>&lt;section id="section1"&gt;</code> will assign the ID "section1" to the content in that section. </li>
                            <li> Create the anchor link in the desired location on your page. Assign the anchor ID of the desired content to the href element preceded by a <kbd>#</kbd>.</li>
                            <li>Example: <code>&lt;a href="#section1"&gt;Visit Section 1&lt;/a &gt;</code> takes a user to the area on the page designated as Section 1 when they click the text <samp> "Visit Section 1"</samp>.</li>
                        </ul> 
                    </li>
                    <li>To link from page-to-page on the same website: 
                        <ul>
                            <li>Use the href attribute to specify the URL.</li>
                            <li> The URL should reflect the <strong>relative path</strong> to the resource, which is the location of a file relative to the current page or directory. The relative path does not include the protocol or host server. </li>
                            <li> When linking to a file in the same directory, use only the name of the file.</li>
                            <li> When linking to a file in a subdirectory, use the name of the file preceded by the name(s) of the subfolders that must be accessed to get from the current page to the desired resource. Use a slash <kbd>/</kbd> to separate the names of the subfolders.</li>
                            <li> When linking to a file in the parent or ancestor directory, use the name of the file preceded by the name(s) of the parent folders that must be accessed to get from the current page to the desired resource. Use two periods <kbd>.</kbd><kbd>.</kbd> to move up one directory at a time.</li>     
                            <li>Example: link to a file in the same directory. <code>&lt;a href="about.html"&gt;About&lt;/a&gt;</code> takes a user to the file at the location <samp>www.example.edu/about.html</samp> when they click on the text <samp>"About"</samp> on the <samp>www.example.edu/index.html</samp> page. </li>
                            <li>Example: link to a file in a subdirectory. <code>&lt;a href="logos/image1.png"&gt;First Logo&lt;/a&gt; </code>takes a user to the file at the location<samp>www.example.com/about/logos/image1.png</samp>, where <samp>logos</samp> is a subfolder containing the <samp>image1</samp> file.</li>
                            <li> Example: link to a file in a parent directory. <code>&lt;a href="../about/index.html"&gt;About&lt;/a&gt;</code> takes a user to back to the file at the location <samp>www.example.com/about/index.html</samp>. </li>
                        </ul> 
                    </li>        
                </ol>
            </article>
            <article id="images"> 
                <h3>Image Optimization</h3>
                <p>The six major specifications for images on the web are: descriptive file name, small file size, exact dimensions, correct file format, reduced resolution, and color mode. These specifications each profoundly impact the performance of an image on the webpage in various ways. A descriptive file name can drive traffic to a website and aid in accessibility as it is used by search engines and screen readers. Small file sizes allow for faster load times, conserve server resources, and optimize bandwidth, allowing websites to work effectively on mobile devices. The dimensions of an image impact how the image is displayed on various devices, the quality and sharpness of the image, and the file size of the image. The file format determines how an image is sorted, compressed, and displayed. This has important ramifications for image quality, file size, transparency, animation, and compatibility with browsers. Resolution refers to the number of pixels per inch (PPI) of an image. Higher resolution equates to more pixels per inch, creating sharper images with finer details, but the images take longer to load. A low resolution image may load faster but also appear blurry or pixelated when displayed on a larger screen. Therefore, it is important to consider the output display parameters when choosing image resolution. The color mode dictates how colors are represented and stored in an image, which determines the range and depth of colors on a website. RGB color mode is the primary color mode in web design and is used for PNG, JPG, SVG, and WebP files. Indexed color mode uses up to 256 colors to represent an image. It is used for GIF files and is often found in logos and icons. Together, these specifications affect the look, feel, and user experience of a website. 
                </p>
                <p> The file formats JPG and WebP are appropriate for photos, and the file formats GIF and PNG are appropriate for line art. JPG supports millions of colors and is a widely used format for images. JPG files utilize <strong>lossy compression</strong>, meaning that there is a slight loss of quality under high compression. However, this allows images to compress to smaller file sizes. WebP, PNG, and GIF file types support <strong>lossless compression</strong>, resulting in sharp lines and crisp edges. While lossless compression can maintain image quality under higher compression, it tends to result in larger file sizes. JPG does not support transparency or animation, while WebP, GIF and PNG all support both. Transparency allows an image to integrate seamlessly into a web design. The art can be placed on top of different backgrounds without adding additional background or boundaries around the image. GIF images are limited to a maximum of 256 colors, which is often sufficient for logos and icons. SVG is also appropriate for logos, butons, icons, and nav bars. </p>
            </article>
            <article id="favicon"> 
                <h3>Favicons</h3>
                <p>The term <strong>favicon</strong> is short for “favorite icons”. They are small icons displayed in the browser’s address bar, tabs, and bookmarks to serve as a visual representation of the website or brand. A recognizable favicon helps users identify a tab when multiple browser tabs are open and locate their favorite websites from their bookmarks. On mobile devices, favicons can also serve as home screen icons if the user adds the website to their home screen as a shortcut. In a browser’s address bar, favicons are used to represent previously visited websites. The most common file formats for favicons are SVG and PNG. Websites often contain their favicon in multiple file formats optimized for different browsers and devices. The browser will then use the appropriate file to display the favicon. A website’s favicon should be easily recognizable by the user and incorporate elements and colors consistent with the website.</p>
            </article>
            <article id="cascadingstylesheets">
                <h3>Cascading Style Sheets</h3> 
                <p> When creating a website, HTML provides a basic structure with default values for font, color, and page layout. HTML allows website developers to create the content of their websites. However, <strong>Cascading Style Sheets</strong>, or CSS, allows website developers to control the look and feel of the website. By  separating the presentation from the content, utilizing CSS enhances the maintainability of the code, as the visual design of the website can be changed without altering the underlying content. CSS also promotes a cohesive design across all pages of the website, as styles for each element are uniquely defined and carried over from page to page. Furthermore, CSS has features, such as media queries, that allow developers to create a website that is compatible with various screen sizes and browsers. Finally, CSS can lead to a more accessible and readable website as appropriate color contrasts, font sizes, and responsive layouts are defined. </p>
                <p> The five ways to incorporate styles are <strong>external</strong>, <strong>embedded</strong>, <strong>inline</strong>, in <strong>JavaScript template literals</strong>, and in <strong>regular JavaScript</strong>. Externally linked CSS files are the most commonly used method for incorporating styles. It allows all the styles to be grouped in one or more external files that are linked in the global head of the HTML document. Embedded, inline styles, JavaScript template literals, and regular JavaScript are used to make quick, specific style changes to individual elements where the style change is not expected to occur often. </p>
            </article>
            <article id="forms">
                <h3>Forms</h3>
                <p>The main goals of accessible forms are to: provide clear instructions; highlight required fields; describe the rationale for the information requested; set the first field to autofocus; allow each field to be keyboard accessible; add tab indexing to complex forms; and ensure messages are readable. All form elements should be designed in a way that allows any user to understand and navigate through regardless of any differences in user ability or technology. This ensures equal access to participation in the form among users. </p>
                <p> There are several major tags used for forms in HTML. The <code> &lt;form&gt; </code> tag wraps the whole form and defines its behavior. It has two important attributes: "action," which indicates where the request is sent, and "method," which indicates the HTTP protocol to be used in the HTTP request sent when the form is submitted. The <code> &lt;fieldset&gt; </code> and <code> &lt;legend&gt; </code> tags separate forms into logical groups. This is important for improving the accessibility of the form. The <code> &lt;label&gt; </code> tag allows developers to describe the purpose of the section of the form. The "for=" attribute matches the "id=" attribute in the fieldset and legend. The <code> &lt;input&gt; </code> tag is used for form elements that request the user to input information, such as text boxes, radio buttons, or checkboxes. This tag has an additional attribute, "type", which specifies the type of input. The <code> &lt;textarea&gt; </code> tag is used to allow users to type messages or comments. The <code> &lt;select&gt; </code> tag will create a dropdown list, allowing users to select from options in the list. The <code> &lt;option&gt; </code> tags define these choices in the list. The <code> &lt;button&gt; </code> tag creates a clickable button to trigger an action within the form, such as submit. 
                </p>
                <p>The major form style recommendations to improve usability are: placement of labels and form controls; size of labels and form controls; color, contrast, and spacing of form controls. Combining a standard design with unique text and values helps users access the form on your website. As a general rule, the height and width of the inputs, selects, and buttons should be the size of the tip of a finger. Furthermore, spacing can make each group of inputs easily identifiable as separate units. Thus, margins and paddings can improve usability. Additionally, adding the "autofocus" attribute can improve flow by placing the cursor in the first field and adjusting text sizes can aid in readability.  </p>
            </article>
            <article id="express">
                <h3> Node, NPM, and Express</h3>
                <p>
                    Node.js is a runtime environment that allows you to run JavaScript code outside the web browser. You can build server-side applications and APIs using JavaScript with Node. It provides a large library of JavaScript modules through NPM. NPM stands for Node Package Manager. It is an open-source collection of libraries and modules, and it allows you to easily incorporate these features into your project. A popular tool in Node.js is nodemon, which allows automatic server restarts during development. Express is a framework for building web applications using Node.js. Using Express, you can get, post, and delete data, and define ports and routes that the data will take. Express offers middleware functions that can intercept HTTP requests and perform tasks such as parsing request bodies and handling authentication.  
                </p>
            </article>

        </>
    );
}
export default TopicsPage;