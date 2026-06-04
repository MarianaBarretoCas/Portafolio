<template>
    <header class="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-white/10">    
        
        <nav class="navbar max-w-7xl mx-auto py-4 px-6">
            <div class="flex items-center justify-between w-full">
                <div class="logo">
                    <a href="#home" class="font-logo text-3xl font-bold text-white">Mariana Barreto</a><span class="text-sm text-gray-400">.dev</span>
                </div>
                <ul class="nav-links hidden md:flex items-center gap-8 text-sm text-slate-300 font-medium text-gray-300 transition">
                    <li><a href="#home" class="hover:text-violet-400 transition-colors">Home</a></li>
                    <li><a href="#about" class="hover:text-violet-400 transition-colors">About</a></li>
                    <li><a href="#skills" class="hover:text-violet-400 transition-colors">Skills</a></li>
                    <li><a href="#projects" class="hover:text-violet-400 transition-colors">Projects</a></li>
                    <li><a href="#contact" class="hover:text-violet-400 transition-colors">Contact</a></li>
                </ul>
                <div class="buttons hidden md:flex items-center gap-4">
                    <a href="#download-cv" class="bg-gradient-to-r from-purple-700 to-violet-700 hover:from-purple-500 hover:to-violet-500 text-white font-medium py-2 px-6 rounded-xl shadow-md transition-all">Download CV</a>
                    <button class="border border-white/10 rounded-xl px-3 py-2">🌙</button>
                </div>
            </div>
        </nav>
    </header>
</template>