(()=>{"use strict";function e(){const e=document.createElement("div"),t=document.createElement("h2"),n=document.createElement("img"),o=document.createElement("p");t.textContent="Come eat here pls",n.setAttribute("src","https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/06/25/15614775255199.jpg"),o.textContent="We've got lots of food come eat it, it's so good I promise",e.append(t,n,o),document.querySelector("#content").appendChild(e)}const t=(e,t,n)=>{const o=document.createElement("div"),c=document.createElement("h3"),a=document.createElement("img"),m=document.createElement("p");return c.textContent=e,a.src=t,m.textContent=n,o.append(c,a,m),o},n=document.createElement("nav"),o=document.createElement("button"),c=document.createElement("button"),a=document.createElement("button");function m(n){switch(document.querySelector("#content div").remove(),n.target.textContent){case"HOME":e();break;case"MENU":!function(){const e=document.createElement("div");e.append(t("Super Duper Soup","./soup.png","Broccoli and mushrooms creamy soup."),t("Pizza Queen","./pizza.png","Roman style 4 cheese pizza (mozzarella, parmigiano, provolone, ricotta) topped with honey."),t("Sea Risotto","./risotto.png","Risotto with squid and mussels."),t("Chocotorta","./chocotorta","Argentinian dessert made with chocolate cookies, cream cheese and dulce de leche.")),document.querySelector("#content").appendChild(e)}();break;case"CONTACT":!function(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("h3"),o=document.createElement("p"),c=document.createElement("p");t.classList.add("contactDiv"),t.id="reserv",n.textContent="Reservations",o.textContent="Phone: 123-444-5678",c.textContent="E-mail: reservations@restaurant.com",t.append(n,o,c),e.appendChild(t);const a=document.createElement("div"),m=document.createElement("h3"),r=document.createElement("p"),d=document.createElement("p");a.classList.add("contactDiv"),a.id="busin",m.textContent="Business",r.textContent="Phone: 987-555-4321",d.textContent="E-mail: business@restaurant.com",a.append(m,r,d),e.appendChild(a);const s=document.createElement("div"),i=document.createElement("h3"),u=document.createElement("div"),l=document.createElement("img"),p=document.createElement("a"),E=document.createElement("div"),h=document.createElement("img"),C=document.createElement("a");s.classList.add("contactDiv"),s.id="social",i.textContent="Social",l.src="instagram-icon.png",p.textContent="https://www.instagram.com/restaurant/",p.href="https://www.instagram.com/restaurant/",h.src="facebook-icon.png",C.textContent="https://www.facebook.com/restaurant/",C.href="https://www.facebook.com/restaurant/",u.append(l,p),E.append(h,C),s.append(i,u,E),e.appendChild(s),document.querySelector("#content").appendChild(e)}()}}o.textContent="HOME",c.textContent="MENU",a.textContent="CONTACT",n.append(o,c,a),n.querySelectorAll("button").forEach((e=>e.addEventListener("click",m))),document.querySelector("body").prepend(n),e()})();