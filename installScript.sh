:<<'licenseEnd'
imitated seed engine critical files downloader.

BSD 3-Clause License

Copyright (c) 2022, poiega
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

licenseEnd

echo "Imitated-seed engine critical files downloader"
echo ""
echo "Engine original author: gdl-blue"
echo "Engine license: (c) gdl-blue; Free to use"
echo ""
echo "Original author: Poiega"
echo "File license: BSD 3-Clause License"
echo ""

wget https://theseed.io/js/theseed.js -P /js/
wget https://theseed.io/js/jquery-2.1.4.min.js -P /js/
wget https://theseed.io/js/jquery-1.11.3.min.js -P /js/
wget https://theseed.io/js/intersection-observer.js -P /js/
wget https://theseed.io/js/dateformatter.js -P /js/
wget https://theseed.io/css/wiki.css -P /css/
wget https://theseed.io/css/katex.min.css -P /css/
wget https://theseed.io/css/diffview.css -P /css/
