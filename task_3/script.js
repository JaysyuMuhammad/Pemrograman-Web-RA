      const Btn1 = document.getElementById("button1");
      const Btn2 = document.getElementById("button2");
      const Ujudul = document.getElementById("judul")
      const Uteks = document.getElementById("teks");
      const Uteks2 = document.getElementById("teks2");
      const Fig = document.querySelector("figure");
      const myImg = document.querySelector("div", "img");

      function ubah() {
        Ujudul.innerHTML = "Ini adalah halaman asli"
        Uteks.innerHTML = "Halo semua, saya Jaysyu Muhammad, orang yang baik dan penyayang";
        myImg.innerHTML =
          '<img src="foto.jpeg" alt="Photo saya" title="ini saya" width="330" height="400">';
        Uteks2.innerHTML =
          "Saya adalah salah satu mahasiswa Teknik Informatika Institut Teknologi Sumatera. Saya sangat suka mendengarkan musik dikala tertentu";

        var y = document.createElement("iframe");
        y.setAttribute("src", "https://www.youtube.com/embed/K5NEOwRXa_8");
        y.setAttribute("width", "450");
        y.setAttribute("height", "300");
        y.setAttribute("alt", "salah satu lagu favorit Saya");
        Fig.insertAdjacentHTML("afterbegin", y.outerHTML);
      }

      function percantik_halaman() {
        var CreateStyle = document.createElement("style");
        document.head.appendChild(CreateStyle);
        var styles = `
        html{margin: 0;padding: 0;}
        body{
            background-color: #02C3F7;
        }
        h1{
            text-align:center;
            font-size:x-large;
            color:#FF0000;   
        }
        img{
            width: 250px;
            height: 300px;
        }
        .center {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        } 
        p{
            text-align:center;
            font-size:x-large;
            color:#000000;   
        }
        button {
            background-color: #9b24f0;
            color: #04FA04;
            border-radius: 10px;
            border: none;
            padding: 10px;
            margin: 10px;
        }
        button:hover {
            color: black;
            background-color: #b2ebf2;
            transition: 1s;
        }`;
        var styleSheet = document.querySelector("style");
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
      } 
      Btn1.addEventListener("click", ubah);
      Btn2.addEventListener("click", percantik_halaman);