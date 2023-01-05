import createGuest from "cross-domain-storage/guest";
import createHost from "cross-domain-storage/host";

var storageHost = createHost([
  {
    origin: "http://beto-beto-salamander.github.io",
    allowedMethods: ["get", "set", "remove"],
  },
  {
    origin: "http://fikri-gg.github.io",
    allowedMethods: ["get", "set", "remove"],
  },
]);

function setLocalValue(){
 var strg = createGuest(
    window.location.href === "http://beto-beto-salamander.github.io"
 );

 strg.set(Math.random().toString(36), Math.random().toString(36))
}

setLocalValue();