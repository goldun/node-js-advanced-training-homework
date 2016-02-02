"use strict";

class DocumentsCache extends Map {

    set(key, value) {
        if(this.has(key)){
            throw new Exception("document with this key already exists");
        } else {
            super.set(key, value);
        }
    }

    delete(keys) {
        if (Array.isArray(keys)) {
            for (let key of keys) {
                super.delete(key);
            }
        } else {
            super.delete(keys);
        }
    }

}

var documentsCache = new DocumentsCache();

documentsCache.set("first", "First document");
documentsCache.set("second", "Second document");
documentsCache.set("third", "Third document");

console.log(documentsCache.has("first"));
console.log(documentsCache.get("first"));

console.log(documentsCache);
documentsCache.delete(["first", "second"]);
console.log(documentsCache);
documentsCache.delete("third");
console.log(documentsCache);