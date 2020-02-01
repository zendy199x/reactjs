Warning! 

All Javascript modules are already included in mdb.js file. 
You should never include both, mdb.js and modules into your project. 
Modules are intended for developers who want to minimize a size of a website, 
by including only chosen component instead of entire library. 

In that case you should skip mdb.js file and import all modules files which you are intending to use. 

I.e. 
If you want to use only charts or lightbox you should include chart.js and lightbox.js and make sure 
that you are not including mdb.js into your project. 
If you don't know which components do you want to use now or in a future, you should include mdb.js
and skip all other module files.