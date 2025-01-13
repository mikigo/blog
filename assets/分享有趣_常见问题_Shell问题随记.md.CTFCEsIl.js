import{_ as i,c as a,R as n,o as l}from"./chunks/framework.DEC0wfly.js";const o=JSON.parse('{"title":"Shell问题随记","description":"","frontmatter":{"Author":"海针"},"headers":[],"relativePath":"分享有趣/常见问题/Shell问题随记.md","filePath":"分享有趣/常见问题/Shell问题随记.md","lastUpdated":1736789141000}'),h={name:"分享有趣/常见问题/Shell问题随记.md"};function p(t,s,e,k,d,r){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="shell问题随记" tabindex="-1">Shell问题随记 <a class="header-anchor" href="#shell问题随记" aria-label="Permalink to &quot;Shell问题随记&quot;">​</a></h1><h3 id="脚本实现切换用户后操作" tabindex="-1">脚本实现切换用户后操作 <a class="header-anchor" href="#脚本实现切换用户后操作" aria-label="Permalink to &quot;脚本实现切换用户后操作&quot;">​</a></h3><p>问题描述：shell脚本中如果涉及切换用户，无法执行切换操作之后命令，如root用户执行以下脚本：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#! /bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">su</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mars</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 执行成功</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 666</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 不会执行</span></span></code></pre></div><p>问题原因：脚本中切换用户后，会先开一个子shell，所以后续命令不会执行，返回当前shell后才会执行</p><p>解决方案：使用xdotool模仿键盘输入，可规避环境问题，安装xdotool(apt install xdotool)后，修改代码如下：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#! /bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">方案1：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xdotool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;su mars&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 模拟输入&#39;su mars&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xdotool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Return</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 模拟输入回车</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xdotool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;echo 666&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 模拟输入&#39;echo 666&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xdotool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Return</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 模拟输入回车</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">方案2：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xdotool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;su mars&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 模拟输入&#39;su mars&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xdotool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> keydown</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Return</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 模拟按下回车</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xdotool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> keyup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Return</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 模拟弹起回车</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xdotool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;echo 666&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 模拟输入&#39;echo 666&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xdotool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> keydown</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Return</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 模拟按下回车</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xdotool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> keyup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Return</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 模拟弹起回车</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">方案3：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xdotool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;su mars</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                         # 模拟输入&#39;su mars&#39;+回车</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xdotool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;echo 666</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                         # 模拟输入&#39;echo 666&#39;+回车</span></span></code></pre></div><p>补充：xdotool存在一些稳定性问题，以上方案实测仅<code>方案3</code>可用，其他方案理论上无问题，但执行失败，常用命令说明：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 模拟击键a [*注1]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xdotool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 模拟按两个键alt+tab</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xdotool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> alt+Tab</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 自动输入word</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xdotool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;word&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 自动输入word带回车</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xdotool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;word</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 模拟鼠标移动+点击，这会让鼠标移动到（x，y），然后点击鼠标左键。“1”代表鼠标左键，“2”则是滚轮，“3”则是右键。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xdotool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mousemove</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 655</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 320</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> click</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 打开的窗口中搜索对应名称的窗口，并聚焦于该窗口，然后模拟击键</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xdotool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> search</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [name </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> window]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [keys </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> press]</span></span></code></pre></div><h3 id="通过命令创建用户并设置密码" tabindex="-1">通过命令创建用户并设置密码 <a class="header-anchor" href="#通过命令创建用户并设置密码" aria-label="Permalink to &quot;通过命令创建用户并设置密码&quot;">​</a></h3><p>问题描述：shell脚本使用root用户创建普通用户并设置密码操作时，因为设置密码是交互式操作，需要用户2次确认，使用<code>echo Test#136 | passwd login_a</code>显然不会成功。</p><p>解决方案：使用非交互式命令设置密码，如下：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 方案1 使用passwd参数&#39;--stdin&#39;，uos与Ubuntu不可用，不支持该参数</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Test#136&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> passwd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> login_a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --stdin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 方案2 使用chpasswd</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">useradd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> login_a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /bin/bash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;login_a:Test#136&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> chpasswd</span></span></code></pre></div><p>补充：如果密码中包含 <code>$</code> 字符，需要使用反斜线进行转义<code>\\$</code></p><h3 id="账号相关命令" tabindex="-1">账号相关命令 <a class="header-anchor" href="#账号相关命令" aria-label="Permalink to &quot;账号相关命令&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># passwd：修改密码</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># uptime： 显示系统运行信息</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># who：查看当前登录的用户</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># passwd root：修改root密码</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># su 切换root用户，保留当前工作环境（保持当前目录），输入root用户密码</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># su -i 切换root用户与root用户环境，输入root用户密码，无初始密码则设置后登陆</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># sudo su 切换root，输入当前用户密码</span></span></code></pre></div><h3 id="用户管理" tabindex="-1">用户管理 <a class="header-anchor" href="#用户管理" aria-label="Permalink to &quot;用户管理&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> useradd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> username</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /bin/bash</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uid</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gid</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -c&lt;备注&gt; 　加上备注文字。备注文字会保存在passwd的备注栏位中。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -d&lt;登入目录&gt; 　指定用户登入时的起始目录。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -D 　变更预设值．</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -e&lt;有效期限&gt; 　指定帐号的有效期限。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -f&lt;缓冲天数&gt; 　指定在密码过期后多少天即关闭该帐号。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -g&lt;群组&gt; 　指定用户所属的群组。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -G&lt;群组&gt; 　指定用户所属的附加群组。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -m 　自动建立用户的登入目录。（等效 -d /home/username）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -M 　不要自动建立用户的登入目录。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -n 　取消建立以用户名称为名的群组．</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -r 　建立系统帐号。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -s&lt;shell&gt;　 　指定用户登入后所使用的shell。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -u&lt;uid&gt; 　指定用户ID。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> usermol</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new_username</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> old_username</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 修改用户名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> usermol</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> username</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 修改uid</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> userdel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> username</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 删除用户名</span></span></code></pre></div><h3 id="解除账户锁定" tabindex="-1">解除账户锁定 <a class="header-anchor" href="#解除账户锁定" aria-label="Permalink to &quot;解除账户锁定&quot;">​</a></h3><p>问题描述：命令行输出错误密码次数过多，导致账号被锁定xmin</p><p>解决办法：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 以下命令可登录root用户执行，username为锁定用户账号</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pam_tally2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> username</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #查看错误了几次</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pam_tally2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> username</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --reset</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   #重置</span></span></code></pre></div><h3 id="ssh配置root登录" tabindex="-1">ssh配置root登录 <a class="header-anchor" href="#ssh配置root登录" aria-label="Permalink to &quot;ssh配置root登录&quot;">​</a></h3><p>问题描述：ssh默认不允许root用户登录</p><p>解决办法：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 修改ssh服务配置文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/ssh/sshd_config</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#调整PermitRootLogin参数值为yes，并保存退出</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ssh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 重启服务生效</span></span></code></pre></div><h3 id="删除目录的非指定文件" tabindex="-1">删除目录的非指定文件 <a class="header-anchor" href="#删除目录的非指定文件" aria-label="Permalink to &quot;删除目录的非指定文件&quot;">​</a></h3><p>问题描述 在shell 脚本调试或者执行时，会经常遇到需要删除当前目录不需要的文件，手动删除十分麻烦。</p><p>解决方案 <code>shopt -s extglob</code><code>rm -rf !(file1|file2)</code></p><p>解决过程与分析 <code>shopt</code> 命令用于显示和设置shell中的行为选项，通过这些选项以增强shell易用性；如果不执行<code>shopt -s extglob</code> ，直接执行 <code>rm -rf !(*.txt)</code>会提示<code>bash: !: event not found</code></p><p>实例： 1) 在<code>/home/amd</code>目录下存在文件：<code>1.txt、test.log、test.txt、1.deb、1.log</code>，现在只保留<code>txt</code>格式的文件。</p><p>补充代码块</p><p>​ 2) 在<code>/home/amd</code>目录下存在文件：<code>1.txt、test.log、test.txt、1.deb、1.log</code>，现在只保留<code>txt</code>和<code>deb</code>格式的文件。</p><p>补充代码块</p><p>​ 3) 在<code>/home/amd</code>目录下存在文件：<code>1.txt、test.log、test.txt、1.deb、1.log</code>，现在保留指定目录下<code>log</code>格式的文件。</p><p>补充代码块</p><h3 id="shell中单-双-反引号的区别" tabindex="-1">shell中单/双/反引号的区别 <a class="header-anchor" href="#shell中单-双-反引号的区别" aria-label="Permalink to &quot;shell中单/双/反引号的区别&quot;">​</a></h3><p>问题描述 在shell执行的时候，常常遇到调用的变量被当做字符处理，导致脚本运行出错。</p><p>解决方案 使用双引号将需要保留特殊字符的字符串括起来。</p><p>解决过程与分析 双引号（&quot;&quot;）：保留特殊字符的功能，如美元符号、反引号、反斜线。 单引号（&#39;&#39;）：被单引号括起来的字符都被视为普通字符对待。 反引号（\`\`）：被反引号括起来的字符串被当做shell命令执行，其标准输入结果取代整个反引号部分。</p><p>实例：</p><p>补充代码块</p><h3 id="杀死进程的多种方法" tabindex="-1">杀死进程的多种方法 <a class="header-anchor" href="#杀死进程的多种方法" aria-label="Permalink to &quot;杀死进程的多种方法&quot;">​</a></h3><p>问题描述 在shell脚本执行中，经常遇到需要终止某个进程，但是通过进程id终止十分不方便，因为每次执行的进程id是变化的，导致脚本运行效率低下。</p><p>解决方案 第一种：<code>ps aux | grep netserver | grep -v grep | cut -c 9-15 | xargs kill -9</code> 第二种：<code>pidof netserver | xargs kill -9</code> 第三种：<code>pgrep netserver | xargs kill -9</code></p><p>解决过程与分析 第一种： <code>ps aux</code> 显示所有的进程 <code>grep netserver </code>过滤显示<code>netserver</code>相关的进程 <code>grep -v grep </code>过滤<code>grep</code>的查询进程 <code>cut -c 9-15 </code> 截取对应位置的字符，即进程id <code>xargs</code> 捕获左边的输出传递给右边的命令 <code>kill -9</code> 强制杀死进程</p><p>第二种： <code>pidof</code> 用于查找指定名称的进程的进程号id号 语法： <code>pidof (选项) (参数)</code> 选项： <code>-s：仅返回一个进程号；</code><code>-c：仅显示具有相同“root”目录的进程；</code><code>-x：显示由脚本开启的进程；</code><code>-o：指定不显示的进程ID。</code></p><p>第三种： <code>pgrep </code>是通过程序的名字来查询进程的工具，一般是用来判断程序是否正在运行。 语法： <code>pgrep (选项) (参数)</code> 选项： <code>-l 同时显示进程名和PID</code><code>-o 当匹配多个进程时，显示进程号最小的那个</code><code>-n 当匹配多个进程时，显示进程号最大的那个</code></p><p>实例：</p><ol><li><p>启动stress进程，执行命令： stress -c 1 &amp; stress -c 1 &amp; stress -c 1 &amp;</p></li><li><p>使用第一种终止进程的命令： <code>ps aux | grep stress | grep -v grep | cut -c 9-15 | xargs kill -9</code></p></li><li><p>使用第二种终止进程的命令： <code>pidof stress | xargs kill -9</code></p></li><li><p>使用第三种终止进程的命令： <code>pgrep stress | xargs kill -9</code></p></li></ol><h3 id="_0-等用法及说明" tabindex="-1">$#,$0,$@ 等用法及说明 <a class="header-anchor" href="#_0-等用法及说明" aria-label="Permalink to &quot;$#,$0,$@ 等用法及说明&quot;">​</a></h3><p>问题描述</p><p>​ 在编写shell脚本的时候常常会向方法里面传递不同的参数，将参数放入变量的方式会导致脚本行数增加，代码执行效率不高，且不利于后期维护。</p><p>解决方案</p><p>​ 使用$1、$2、$@等方式调用传入的参数。</p><p>解决过程与分析</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$#</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 是传给脚本的参数个数</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 是脚本本身的名字</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 是传递给该shell脚本的第一个参数</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 是传递给该shell脚本的第二个参数</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 是传给脚本的所有参数的列表</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 是以一个单字符串显示所有向脚本传递的参数，与位置变量不同，参数可超过9个</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$$</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 是脚本运行的当前进程ID号</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 是显示最后命令的退出状态，0表示没有错误，其他表示有错误</span></span></code></pre></div><p>实例：</p><p>​ 创建脚本文件：<code>test.sh</code>，将下面的代码复制到文件中。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #!/bin/bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;传入的参数总数：&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$#</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;第一个参数是：&quot;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;第二个参数是：&quot;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$2</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;传入的所有参数在这里：&quot;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$@</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;我是字符串：&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$*</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;本次运行的脚本进程号是：&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$$</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;我的名字是：&quot;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$0</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;$@ 和 $*的区别如下：&#39;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;$@ 被双引号括起来后，是4份数据&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> var </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$@</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">var</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">done</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;$* 被双引号括起来后，是1份数据&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> var </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">var</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">done</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;1&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;2&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;3&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;4&quot;</span></span></code></pre></div>`,60)]))}const g=i(h,[["render",p]]);export{o as __pageData,g as default};
