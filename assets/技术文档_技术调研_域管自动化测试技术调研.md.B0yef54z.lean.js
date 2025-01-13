import{_ as a,c as i,R as s,o as t}from"./chunks/framework.DEC0wfly.js";const l="/%E5%9F%9F%E7%AE%A1%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95%E6%8A%80%E6%9C%AF%E8%B0%83%E7%A0%94_asset/1.png",g=JSON.parse('{"title":"域管自动化测试技术调研","description":"","frontmatter":{"Author":"mikigo"},"headers":[],"relativePath":"技术文档/技术调研/域管自动化测试技术调研.md","filePath":"技术文档/技术调研/域管自动化测试技术调研.md","lastUpdated":1736789141000}'),d={name:"技术文档/技术调研/域管自动化测试技术调研.md"};function n(o,e,h,c,p,r){return t(),i("div",null,e[0]||(e[0]=[s('<h1 id="域管自动化测试技术调研" tabindex="-1">域管自动化测试技术调研 <a class="header-anchor" href="#域管自动化测试技术调研" aria-label="Permalink to &quot;域管自动化测试技术调研&quot;">​</a></h1><h2 id="现状问题" tabindex="-1">现状问题 <a class="header-anchor" href="#现状问题" aria-label="Permalink to &quot;现状问题&quot;">​</a></h2><p>域管产品主要分为服务端和客户端，服务端为一个后台服务 <code>Web</code> 平台系统，客户端为分布的 <code>UOS</code> 机器。</p><p>域管测试用例中，大量的用例会涉及到服务端和客户端协同操作。</p><h3 id="服务端方面" tabindex="-1">服务端方面 <a class="header-anchor" href="#服务端方面" aria-label="Permalink to &quot;服务端方面&quot;">​</a></h3><p>现有域管 <code>AT</code> 主要实现为单接口自动化测试，这类自动化测试相对简单，主要校验接口的入参和返回，但较多业务场景是复合接口的，由于没有可用的 <code>API</code> 接口文档，导致很多场景没办法做接口自动化。</p><p>因此经过评估，服务端复合接口场景的测试，将基于 <code>Web UI</code> 自动化实现。</p><h3 id="客户端方面" tabindex="-1">客户端方面 <a class="header-anchor" href="#客户端方面" aria-label="Permalink to &quot;客户端方面&quot;">​</a></h3><p>客户端为分布式的安装 <code>UOS</code> 系统的机器，现有的域管 <code>AT</code> 只能通过 <code>SSH</code> 的方式控制客户端做一些简单的命令行操作，比较局限，无法实现控制客户端做一些复杂的 <code>UI</code> 功能上的操作。</p><h2 id="要实现的效果" tabindex="-1">要实现的效果 <a class="header-anchor" href="#要实现的效果" aria-label="Permalink to &quot;要实现的效果&quot;">​</a></h2><p>基于以上现有问题，域管自动化测试我们希望最终实现的效果是：</p><ul><li>能控制服务端 <code>Web</code> 平台做复杂的 <code>UI</code> 功能操作，最好能直接驱动系统自带的浏览器进行测试；</li><li>能远程控制客户端，既能做简单的命令行的操作，也能做复杂的 <code>UI</code> 功能操作。</li></ul><h2 id="技术方案" tabindex="-1">技术方案 <a class="header-anchor" href="#技术方案" aria-label="Permalink to &quot;技术方案&quot;">​</a></h2><p>域管用例涉及服务端和客户端穿插操作，底层功能实现大体也会分为两部分：<code>Server（服务端）</code>、<code>Client（客户端）</code>。</p><h3 id="server-服务端" tabindex="-1">Server（服务端） <a class="header-anchor" href="#server-服务端" aria-label="Permalink to &quot;Server（服务端）&quot;">​</a></h3><p>基于 <code>Web UI</code> 自动化测试，控制浏览器进行用例执行。<code>YouQu</code> 目前还没有接入 <code>Web UI</code> 测试功能，要接入此功能需要先对工具进行选型。</p><h4 id="工具调研" tabindex="-1">工具调研 <a class="header-anchor" href="#工具调研" aria-label="Permalink to &quot;工具调研&quot;">​</a></h4><p>市面上耳熟能详的可用于 <code>Web UI</code> 自动化测试工具：<code>Selenium</code>、<code>Cypress</code>、<code>Puppeteer</code>、<code>Playwright</code>；</p><p>咱们先初步排除掉一些明显不用的：</p><ul><li><code>Cypress</code>，只支持 <code>JavaScript</code>，而我们自动化人员大多使用 <code>Python</code> 对 <code> JavaScript</code> 不熟悉，排除。</li><li><code>Puppeteer</code>，只支持谷歌浏览器，格局没打开，官方不支持 <code>Python</code>，排除。</li></ul><p>剩下 <code>Selenium</code>、<code>Playwright</code>，我们从一些方面做对比：</p><table><thead><tr><th style="text-align:left;">对比指标</th><th style="text-align:center;">Selenium</th><th style="text-align:center;">Playwright</th></tr></thead><tbody><tr><td style="text-align:left;">环境安装难度</td><td style="text-align:center;">✗</td><td style="text-align:center;">✔</td></tr><tr><td style="text-align:left;">运行速度</td><td style="text-align:center;">✗</td><td style="text-align:center;">✔</td></tr><tr><td style="text-align:left;">元素等待</td><td style="text-align:center;">✗</td><td style="text-align:center;">✔</td></tr><tr><td style="text-align:left;">智能定位</td><td style="text-align:center;">✗</td><td style="text-align:center;">✔</td></tr><tr><td style="text-align:left;">稳定性</td><td style="text-align:center;">✔</td><td style="text-align:center;">✔</td></tr><tr><td style="text-align:left;">文档</td><td style="text-align:center;">✔</td><td style="text-align:center;">✗</td></tr><tr><td style="text-align:left;">接口测试</td><td style="text-align:center;">✗</td><td style="text-align:center;">✔</td></tr></tbody></table><p>总结：</p><p><code>Playwright</code> 作为一个比较新的工具，在文档方便确实没有老牌的 <code>Selenium</code> 完善，特别是一些示例、方法的使用说明，都还不够好，甚至有些就没有说明，但基本的使用该有的都有。</p><p>除了文档方面，<code>Playwright</code> 几乎在各方面碾压 <code>Selenium</code>，很明显 <code>Playwright</code> 以绝对优势获胜。</p><h4 id="设计思路" tabindex="-1">设计思路 <a class="header-anchor" href="#设计思路" aria-label="Permalink to &quot;设计思路&quot;">​</a></h4><hr><h5 id="浏览器对象" tabindex="-1">浏览器对象 <a class="header-anchor" href="#浏览器对象" aria-label="Permalink to &quot;浏览器对象&quot;">​</a></h5><p><code>YouQu</code> 框架提供灵活可配置的浏览器对象。</p><ul><li><p>提供一个全局默认的对象：<code>page</code>，默认使用系统自带的浏览器进行测试，如果需要指定其他第三方的浏览器，提供配置项可以指定浏览器对应的路径。</p></li><li><p>还需要提供一个对象：<code>native_page</code>，它使用 <code>Playwright</code> 最新的 <code>Chromium</code> 浏览器进行测试。</p></li></ul><h5 id="方法层" tabindex="-1">方法层 <a class="header-anchor" href="#方法层" aria-label="Permalink to &quot;方法层&quot;">​</a></h5><p>方法层按照 <a href="http://youqu.uniontech.com/docs/%E8%87%AA%E5%8A%A8%E5%8C%96%E6%8A%80%E6%9C%AF/%E8%87%AA%E5%8A%A8%E5%8C%96%E6%80%9D%E6%83%B3%E7%90%86%E5%BF%B5/PageObjects.html" target="_blank" rel="noreferrer">PO</a> 设计思想对域管 Web 平台进行封装。</p><p><img src="'+l+`" alt=""></p><p>目录结构：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">server</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> __init__.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pages</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> _base_page.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 基类</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> home_page.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 首页类</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> audit_page.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 审计页面类</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ...</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 其他页面类</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">│  </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> __init__.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> udcp_page.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       # 方法层统一出口</span></span></code></pre></div><ul><li>基类负责处理通用页面行为；</li><li>首页、终端、审计等其他页面类，封装各自页面的元素定位和操作方法；</li><li>方法唯一出口用于集成所有的页面类，统一出口提供给上层用例调用。</li></ul><h5 id="断言方法" tabindex="-1">断言方法 <a class="header-anchor" href="#断言方法" aria-label="Permalink to &quot;断言方法&quot;">​</a></h5><p><code>YouQu</code> 框架统一提供断言语句，以保持统一的断言语句风格。</p><h3 id="client-客户端" tabindex="-1">Client（客户端） <a class="header-anchor" href="#client-客户端" aria-label="Permalink to &quot;Client（客户端）&quot;">​</a></h3><p>客户端要求能远程控制客户端，既能做简单的命令行的操作，也能做复杂的 <code>UI</code> 功能操作。</p><h4 id="设计思路-1" tabindex="-1">设计思路 <a class="header-anchor" href="#设计思路-1" aria-label="Permalink to &quot;设计思路&quot;">​</a></h4><hr><h5 id="通讯协议" tabindex="-1">通讯协议 <a class="header-anchor" href="#通讯协议" aria-label="Permalink to &quot;通讯协议&quot;">​</a></h5><p>域管客户端部署 YouQu 框架环境，并将 YouQu 框架底层能力注册到 RPC 服务，自动化用例执行端作为 RPC 客户端，在自动化用例执行过程中即可通过 RPC 协议远程调用域管客户端进行操作。</p><p><img src="https://pic.imgdb.cn/item/64f054c3661c6c8e54ff47b5.png" alt=""></p><p>注意，这里的域管客户端是作为 <code>RPC</code> 的服务端，而域管的服务端是自动化脚本执行端，是作为 <code>RPC</code> 的客户端。</p><h5 id="方法层-1" tabindex="-1">方法层 <a class="header-anchor" href="#方法层-1" aria-label="Permalink to &quot;方法层&quot;">​</a></h5><p>域管客户端的操作有特殊性，其在客户端的操作大多是针对有些应用的，比如打开、关闭某个应用，不像应用的操作对象一般就是应用本身。</p><p>因此，域管客户端方法层设计和应用的方法层设计也有区别，需要因地制宜。</p><p>目录结构：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">client</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> __init__.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> udcp_widget.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                 # 方法层统一出口</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">└──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> widget</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> base_widget.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">             # 基类</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dde_dock_widget.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         # 任务栏的操作</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dde_file_manager_widget.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 文管的操作</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deepin_music_widget.py</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 音乐的操作</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ├──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ....</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                       # 其他应用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    └──</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> __init__.py</span></span></code></pre></div><ul><li>基类处理一些通用的操作行为；</li><li>以应用维度划分方法类，对哪个应用的操作就封装到对应的应用类里面；</li><li>方法层统一出口继承所有的应用类操作，统一出口提供给上层用例调用。</li></ul><h5 id="客户端信息" tabindex="-1">客户端信息 <a class="header-anchor" href="#客户端信息" aria-label="Permalink to &quot;客户端信息&quot;">​</a></h5><p>客户端信息支持命令行入参或配置文件传入远程机器的 <code>user</code>、<code>ip</code>、<code>password</code> 信息；</p><p>用例中通过框架提供的 <code>fixture</code> 对象：<code>slaves</code> 获取数据，供用例层使用。</p><h3 id="隐藏的宝石" tabindex="-1">隐藏的宝石 <a class="header-anchor" href="#隐藏的宝石" aria-label="Permalink to &quot;隐藏的宝石&quot;">​</a></h3><h4 id="_1-rpc-服务注册的问题" tabindex="-1">（1）RPC 服务注册的问题 <a class="header-anchor" href="#_1-rpc-服务注册的问题" aria-label="Permalink to &quot;（1）RPC 服务注册的问题&quot;">​</a></h4><p>常规的 <code>RPC</code> 服务注册只能按照函数一个个显示的注册，也就是说如果要将 <code>YouQu</code> 所有底层能力全部释放出来，需要将 <code>YouQu</code> 所有提供的方法单独做封装，然后逐个注册进 <code>RPC</code> 服务。</p><p>这也是业内常用的方案，但是，这样功能很不好。</p><p>因为 <code>YouQu</code> 底层代码全是面向对象（基于类）的编程，如果全部单独封装成函数，是一个非常巨大的工作量，而且在后续底层新增修改功能后，又要对注册到 <code>RPC</code> 服务里面的代码进行修改；</p><p>所以我们不想要这样的 <code>RPC</code> 服务功能，而是希望利用好 <code>YouQu</code> 优秀的框架设计，能通过将 <code>YouQu</code> 底层统一的功能出口 <code>src.Src</code> 一次性注册到 <code>RPC</code> 服务里面，这样后续 <code>YouQu</code> 框架在迭代可以随意新增或修改，远程控制 <code>RPC</code> 服务也不用做任何修改。</p><h5 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h5><p>使用 <code>zerorpc</code> 实现 <code>RPC</code> ，将 <code>YouQu</code> 的 <code>Src</code> 对象注册到 <code>zerorpc</code> 的服务 <code>API</code> <code>zeroservices</code> 里面，提供 <code>RPC</code> 服务。</p><p>从而实现零注册及维护量的 <code>RPC</code> 服务。</p><h4 id="_2-代码补全的问题" tabindex="-1">（2）代码补全的问题 <a class="header-anchor" href="#_2-代码补全的问题" aria-label="Permalink to &quot;（2）代码补全的问题&quot;">​</a></h4><p>域管客户端基于 <code>RPC</code> 实现的思路存在一个使用体验的问题，就是编写操作方法调用远程函数，在编辑器里面无法做代码补全，也不能追踪代码，使用者必须完整输入要调用的方法名称。</p><p>这对于开发者来说就是，也不是不能用，但是差点儿意思。</p><p>因此，我们希望远程控制也能实现编辑器代码补全、代码追踪。</p><h5 id="解决方案-1" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案-1" aria-label="Permalink to &quot;解决方案&quot;">​</a></h5><ol><li>远程对象返回进行类型注解，解决通过远程对象调用远程方法时可以进行代码补全和代码追踪；</li><li>远程方法类里面将 YouQu 各底层类继承过来，通过属性拦截器进行特殊处理，先将方法从父类中移除，然后将方法调用传递给远程 RPC 对象，使得方法层在编写方法时，可以直接调用本地方法，但实际通过属性拦截器转换到远程对象进行调用，从而实现和本地调用相同编程体验，调用逻辑、代码维护也更加优雅简介。</li></ol><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>基于以上的实现思路，我们可以实现域管自动化测试的目标。通过使用 <code>Playwright</code> 实现服务端的 <code>Web UI</code> 自动化测试，以及通过 <code>RPC</code> 服务实现客户端的远程控制，我们能够有效地模拟服务端和客户端之间的交互。</p><p>对于服务端，通过 <code>YouQu</code> 框架提供的浏览器对象和方法层设计，我们可以实现对 <code>Web</code> 平台复杂 <code>UI</code> 功能的自动化操作。 虽然 <code>Playwright</code> 在自动化测试圈内知名度还不高，但我们相信未来它一定能站在领域的山顶，因此我们大胆使用它，押注未来。</p><p>对于客户端，通过 <code>RPC</code> 服务的部署和远程控制，我们可以实现对远程 <code>UOS</code> 机器上应用的自动化操作。通过应用维度的方法层设计，我们可以灵活地处理不同应用的操作，满足复杂 <code>UI</code> 功能测试的需求。此外，通过命令行或配置文件传入客户端信息，我们可以方便地管理远程机器的测试环境。</p><p>虽然目前存在 <code>RPC</code> 服务注册和代码补全的问题，但这并不影响我们基于现有思路实现域管自动化测试的目标。在后续的迭代中，我们将逐步解决这些问题，进一步提升自动化测试的体验和效果。</p><p>总之，通过以上的实现思路，我们可以信心满满地推进域管自动化测试的工作，提高测试效率，降低人力成本，为域管产品的质量和稳定性提供有力保障。</p>`,76)]))}const u=a(d,[["render",n]]);export{g as __pageData,u as default};
