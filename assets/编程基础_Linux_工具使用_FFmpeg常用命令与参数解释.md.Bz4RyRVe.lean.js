import{_ as i,c as a,R as n,o as p}from"./chunks/framework.DEC0wfly.js";const r=JSON.parse('{"title":"","description":"","frontmatter":{"Author":"禄烨"},"headers":[],"relativePath":"编程基础/Linux/工具使用/FFmpeg常用命令与参数解释.md","filePath":"编程基础/Linux/工具使用/FFmpeg常用命令与参数解释.md","lastUpdated":1736789141000}'),l={name:"编程基础/Linux/工具使用/FFmpeg常用命令与参数解释.md"};function h(t,s,k,e,F,d){return p(),a("div",null,s[0]||(s[0]=[n(`<h2 id="ffmpeg-概述" tabindex="-1">FFmpeg 概述 <a class="header-anchor" href="#ffmpeg-概述" aria-label="Permalink to &quot;FFmpeg 概述&quot;">​</a></h2><p>FFmpeg 是一个极为强大且广泛使用的开源计算机程序，专为处理多媒体文件（包括音频、视频）而设计。它是快速前进（FastForward）MPEG 的缩写，强调了其在多媒体处理方面的高效性。FFmpeg 的核心功能围绕着音视频的记录、转换、解码、编码以及流化，提供了一个全面的解决方案。</p><p><a href="https://ffmpeg.org/" target="_blank" rel="noreferrer">官方文档：https://ffmpeg.org/</a></p><h2 id="ffmpeg-常用参数释义" tabindex="-1">FFmpeg 常用参数释义 <a class="header-anchor" href="#ffmpeg-常用参数释义" aria-label="Permalink to &quot;FFmpeg 常用参数释义&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-i: 输入文件路径。指定要处理的多媒体文件或数据流的来源。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-c: 指定编解码器。例如 -c:v libx264 表示使用H.264视频编解码器，-c:a aac 表示</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    使用AAC音频编解码器。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-f: 强制输出格式。如 -f mp4 强制输出为MP4格式。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-b:v/-b:a: 视频/音频比特率。如 -b:v 500k 设置视频比特率为500kbps，-b:a 128k </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    设置音频比特率为128kbps。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-s: 设置输出分辨率。如 -s 640x480 设置输出分辨率为640x480像素。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-r: 设置帧率。如 -r 30 设置输出视频的帧率为每秒30帧。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-ss: 搜索到指定时间开始转换。如 -ss 00:01:00 从1分钟处开始处理。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-t: 指定处理时长。如 -t 00:01:30 只处理前1分30秒的内容。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-vf: 视频过滤器链。用于视频处理，如缩放、裁剪、旋转等。如 -vf &quot;scale=640:360,rotate=90&quot; </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    先将视频缩放到640x360，再旋转90度。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-af: 音频过滤器链。用于音频处理，如音量调整、均衡器等。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-preset: 编码预设值。影响编码速度和输出文件大小，如-preset slow 较慢但压缩效果好，</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    -preset ultrafast 编码速度快但文件可能较大。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-crf: 对于某些编解码器（如libx264），控制输出的质量。范围通常在0-51之间，数值越小质量越高，</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    如 -crf 23 是一个常见设置。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-acodec/-vcodec: 分别指定音频和视频编解码器，与-c:a和-c:v等效。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-threads: 指定FFmpeg使用的线程数，以利用多核CPU加速处理。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-y: 如果输出文件已存在，则覆盖原有文件，不询问确认。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>这只是 FFmpeg 参数中的一小部分，实际应用中可根据需要组合使用这些参数来完成复杂的多媒体处理任务。</p><p>ffmpeg -h 命令来获取完整的参数列表和最新信息</p></div><h2 id="ffmpeg-常用场景" tabindex="-1">FFmpeg 常用场景 <a class="header-anchor" href="#ffmpeg-常用场景" aria-label="Permalink to &quot;FFmpeg 常用场景&quot;">​</a></h2><p>1、将视频进行重新编码，转换为其他格式</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> input.mp4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c:v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libx264</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c:a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> copy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> output.avi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -c:v 参数用于指定视频编码器，包括但不限于以下几种：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># libx264 - 常用的H.264编码器，适用于高质量视频压缩。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># libx265 - H.265编码器，也称为HEVC，提供比H.264更高的压缩效率。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># libvpx-vp9 - vp9编码器，用于VP9编码视频压缩。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># mpeg4 - 标准MPEG-4视频编码。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># libvpx - vp8编码器，用于VP8编码视频压缩。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># h263 - MPEG-4 Part 3视频编码。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># mpeg2video- MPEG-2视频编码。</span></span></code></pre></div><p>2、提取视频文件中的音频内容，不进行编码，直接复制出来</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> input.mp4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -acodec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> copy</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -map</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> output.mp3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -acodec 参数用于指定在 FFmpeg 转换过程中用于编码音频的编解码器</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># copy：直接复制音频流，不进行重新编码。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># libopus：使用 Opus 编码器，适用于需要高质量音频同时保持低比特率的场景。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ac3：使用 AC-3 编码器，常用于家庭影院和 DVD 音频。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># dts：使用数字影院系统（DTS）编码器，适用于高质量音频压缩。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -map 参数用于选择输入文件中的特定流（视频、音频、字幕等）将其映射到输出文件中</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># v:0 或 video:0：选择第一个视频流。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># a:0 或 audio:0：选择第一个音频流。</span></span></code></pre></div><p>3、视频剪辑，并不进行额外编码</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> video.mp4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ss</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 00</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:00:10</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -to</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 00</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:00:20</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> copy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> output.mp4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -ss：起始时间。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -to：结束时间。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -c copy：无损剪辑，直接复制编码。</span></span></code></pre></div><p>4、对视频进行分辨率裁切，并以 H.265 编码，进行视频重新编码</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> video.mp4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1280</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">x720</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c:v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libx265</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c:a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> copy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> output.mp4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -s：指定输出尺寸。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -c:v：指定视频编解码器。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -c:a：指定音频编解码器。</span></span></code></pre></div><p>5、对视频进行分帧</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> input.mp4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -vf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;fps=30&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> %005d.png</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -vf：设置视频过滤器，并设置过滤器提取每秒30帧画面</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># %005d：%005d是一个占位符，表示一个递增的数字，如：00001.png, 00002.png</span></span></code></pre></div><p>6、对视频进行常见编码的转换</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">INPUT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/home/lxs/Videos/source.mp4&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $INPUT </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-c:v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libx265</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> output.hevc.mp4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $INPUT </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-c:v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libx264</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> output.h264.mp4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $INPUT </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-c:v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libvpx-vp9</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> output.vp9.webm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $INPUT </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-c:v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libvpx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> output.vp8.webm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $INPUT </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-c:v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mpeg2video</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> output.mpeg2.mp4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ffmpeg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $INPUT </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-c:v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mpeg4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> output.mpeg4.mp4</span></span></code></pre></div><p><a href="https://tdoc.uniontech.com/%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B/%E8%A7%86%E9%A2%91%E7%BC%96%E8%A7%A3%E7%A0%81%E5%88%86%E4%BA%AB.html" target="_blank" rel="noreferrer">视频编解码分享（视频）</a></p>`,20)]))}const c=i(l,[["render",h]]);export{r as __pageData,c as default};
