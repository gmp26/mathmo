// include one JS file from another
function inc(filename)
{
	var body = document.getElementsByTagName('body').item(0);
	script = document.createElement('script');
	script.src = filename;
	script.type = 'text/javascript';
	body.appendChild(script)
}

// Check if browser is IE.  Not perfect, but then nor is IE
function isIE()
{
	return /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent);
}

var local=false;
var modules = [];
var sdir="";
if(local)
{
	modules.push(new module("Graphs", "flot/jquery.flot.min.js"));
	
}
else
{
	if(isIE())
		modules.push(new module("Graphs", "/javascript/flot/jquery.flot.min.js", ["Excanvas"]));
	else
		modules.push(new module("Graphs", "/javascript/flot/jquery.flot.min.js"));
	modules.push(new module("Excanvas", "/javascript/flot/excanvas.min.js"));
	sdir="/javascript/edcree/";
}
modules.push(new module("Helpers", sdir+"helpers.js"));
modules.push(new module("Polynomials", sdir+"polys.js", ["Helpers"]));
modules.push(new module("Frac_Polynomials", sdir+"fpolys.js", ["Helpers", "Fractions"]));
modules.push(new module("Fractions", sdir+"fractions.js", ["Helpers"]));
modules.push(new module("Complex Numbers", sdir+"complex.js", ["Polynomials"]));
modules.push(new module("Function Trees", sdir+"functions.js"));
modules.push(new module("GuessExact", sdir+"guessExact.js", ["Frac_Polynomials"]));
modules.push(new module("Stats", sdir+"stats.js"));

function module(mn, mp, md)
{
	this.moduleName=mn;
	this.modulePath=mp;
	this.moduleDepends=(md?md:[]);
	this.moduleReady=false;
}

function requireModule(moduleName)
{
	var i=getModule(moduleName);
	if(i==-1)
	{
		alert('Required module '+moduleName+' was not recognised!');
		return(false);
	}
	var b=true;
	if(modules[i].moduleReady==false)
	{
		// load its dependencies first...
		for(var j=0;j<modules[i].moduleDepends.length;j++)
		{
			b&=requireModule(modules[i].moduleDepends[j]);
		}
		// then load the module itself (I tried to make this asynchronous, with AJAX stuff, but it doesn't seem to work that way.  Also, many modules directly include other stuff anyway, which I can't load asynchronously through the modules interface)
		inc(modules[i].modulePath);
		modules[i].moduleReady=b;
	}
	return(b);
}

function haveModule(moduleName)
{
	var i=getModule(moduleName);
	if(i==-1)
	{
		alert('Checked-for module '+moduleName+' was not recognised!');
		return(false);
	}
	return(modules[i].moduleReady);
}

function getModule(moduleName)
{
	var i=-1;
	for(var j=0;j<modules.length;j++)
	{
		if(moduleName.toLowerCase()==modules[j].moduleName.toLowerCase())
		{
			i=j;
			break;
		}
	}
	return(i);
}
