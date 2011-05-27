// gcd of any list of integers
function gcd()
{
	var a=Math.abs(gcd.arguments[0]);
	var b=Math.abs(gcd.arguments[gcd.arguments.length-1]);
	for(var i=gcd.arguments.length;i>2;i--) b=gcd(b,gcd.arguments[i-2]);
	if(a*b==0) return(a+b); // if either is zero, then their gcd is the other
	while((a=a%b)&&(b=b%a));
	return a+b;
}

// sin of pi/6, pi/4 and multiples in the from a/b + csqrt2/d + esqrt3/f
function sinpi(a,b)
{
	var c=gcd(a,b);
	a/=c;
	b/=c;
	if(a==0) return [0,1,0,1,0,1];
	if(a==1&&b==6) return [1,2,0,1,0,1];
	if(a==1&&b==4) return [0,1,1,2,0,1];
	if(a==1&&b==3) return [0,1,0,1,1,2];
	if(a==1&&b==2) return [1,1,0,1,0,1];
	if(a==1&&b==1) return [0,1,0,1,0,1];
	if(a/b>0.5&&a<=b) return sinpi(b-a,b);
	if(a/b>1&&a/b<=1.5)
	{
		var A=new Array(6);
		A=sinpi(a-b,b);
		for(i=0;i<6;i+=2) A[i]*=-1;
		return A;
	}
	if(a/b>1.5&&a/b<2)
	{
		var A=new Array(6);
		A=sinpi(2*b-a,b); 
		for(i=0;i<6;i+=2) A[i]*=-1;
		return A;
	}
	return sinpi(a-2*b,b);
}

// cos as per above
function cospi(a,b)
{
	return sinpi(2*a+b,2*b);
}

// returns a random number between min and max, one argument becomes -min to min, zero arguments picks 0 or 1
function rand(min,max)
{
	if(typeof(min)=='undefined') return Math.round(Math.random());
	if(typeof(max)=='undefined')
	{
		if(min>0) min*=-1;
		max=-min;
	}
	return min+Math.floor((max-min+1)*Math.random());
}

// returns a random number between min and max, but not zero, one argument becomes -min to min
function randnz(min,max)
{
	if(typeof(max)=='undefined')
	{
		if(min>0) min*=-1;
		max=-min;
	}
	if(min==0) min++;
	if(max==0) max--;
	if(min>max) return min;
	var a;
	if((min<0) && (max>0))
	{
		a=rand(min, max-1);
		if(a>=0)
			a++;
	}
	else
		a=rand(min, max);
	return a;
}

// returns a random number from the list sent to the function
function pickrand()
{
	return pickrand.arguments[rand(0,pickrand.arguments.length-1)];
}

// returns a random fraction
function randfrac(max)
{
	return(new frac(rand(max), randnz(max)).reduce());
}

// orders the arguments after r low to high and returns rth. r=0 returns max.
function rank(r)
{
	var n=rank.arguments.length-1;
	if(r==0) r=n;
	list=new Array(n);
	for(var i=0;i<n;i++) list[i]=rank.arguments[i+1];
	for(var i=0;i<n;i++)
	{
		if(list[i]>list[i+1])
		{
			var c=list[i];
			list[i]=list[i+1];
			list[i+1]=c;
			i=-1;
		}
	}
	return list[r-1];
}

// returns the location of the max value in argument, an array (faster version of rank(0, ...) and operates on an array instead of an arg list)
function maxel(a)
{
	var n=a.length;
	var m=a[0];ma=0;
	for(var i=1;i<n;i++)
	{
		if(a[i]>m)
		{
			m=a[i];
			ma=i;
		}
	}
	return ma;
}

// returns a permutation (0-based) to sort the argument, an array, low to high.  Merge sort
function ranking(a)
{
	var n=a.length;
	if(n>2)
	{
		var left=new Array(Math.floor(n/2));
		var right=new Array(n-left.length);
		for(var i=0;i<n;i++)
		{
			if(i<left.length)
				left[i]=a[i];
			else
				right[i-left.length]=a[i];
		}
		var ls=ranking(left);
		var rs=ranking(right);
		var result=new Array(n);
		var lp=0;rp=0;
		for(var i=0;i<n;i++)
		{
			if((rp==right.length)||(lp<left.length&&left[ls[lp]]<right[rs[rp]]))
			{
				result[i]=ls[lp];
				lp++;
			}
			else
			{
				result[i]=rs[rp]+left.length;
				rp++;
			}
		}
		return result;
	}
	else if(n==2)
	{
		if(a[1]<a[0])
		{
			return [1, 0];
		}
		return [0, 1];
	}
	else
		return [0];
}

// Returns n distinct random integers in the range [min, max].  If max omitted, then [-|min|, |min|].  If both omitted, then [1, n]
function distrand(n, min, max)
{
	if(typeof(max)=='undefined')
	{
		if(typeof(min)=='undefined')
		{
			min=1;
			max=n;
		}
		else
		{
			max=Math.abs(min);
			min=-Math.abs(min);
		}
	}
	var list=new Array(max+1-min);
	var res=new Array(n);
	for(var i=0;i<max+1-min;i++)
		list[i]=i+min;
	for(var i=0;i<n;i++)
	{
		var s=rand(i, max-min);
		res[i]=list[s];
		list[s]=list[i];
	}
	return res;
}

// Returns n distinct nonzero random integers in the range [min, max].  If max omitted, then [-|min|, |min|].  If both omitted, then [1, n]
function distrandnz(n, min, max)
{
	if(typeof(max)=='undefined')
	{
		if(typeof(min)=='undefined')
		{
			min=1;
			max=n;
		}
		else
		{
			max=Math.abs(min);
			min=-Math.abs(min);
		}
	}
	if(min==0) min++;
	if(max==0) max--;
	if(min>max) return [min];
	var a=((min<0) && (max>0));
	var list=new Array(max+(a?0:1)-min);
	var res=new Array(n);
	for(var i=0;i<max+(a?0:1)-min;i++)
	{
		list[i]=i+min;
		if(a&&list[i]>=0) list[i]++;
	}
	for(var i=0;i<n;i++)
	{
		var s=rand(i, max+(a?-1:0)-min);
		res[i]=list[s];
		list[s]=list[i];
	}
	return res;
}

// ordinals
function ord(n)
{
	if(n<0)
	{
		alert("negative ordinal requested from ord()");
		return("negative!");
	}
	if(Math.floor(n/10)==1)
		return(n+"th");
	switch(n%10)
	{
		case 1:
			return(n+"st");
		break;
		case 2:
			return(n+"nd");
		break;
		case 3:
			return(n+"rd");
		break;
		default:
			return(n+"th");
		break;
	}
}

// ordinals, using text for anything up to twelfth
function ordt(n)
{
	if(n<0)
	{
		alert("negative ordinal requested from ord()");
		return("negative!");
	}
	if(n<=12)
		return(["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth"][n]);
	return ord(n);
}

// root object a sqrt(n): reduces itself, write in latex
function sqroot(n)
{
	if(n!=Math.floor(n)) alert("non-integer sent to square root");
	var a=1;
	for(var i=2;i*i<=n;i++)
	{
		if(n%(i*i)==0)
		{
			n/=(i*i);
			a*=i--;
		}
	}
	this.a=a;
	this.n=n;
	this.write=function()
	{
		if(this.a==1&&this.n==1) return "1";
		else if(this.a==1) return "\\sqrt{"+this.n+"}";
		else if(this.n==1) return this.a;
		else return this.a+"\\sqrt{"+this.n+"}";
	}
}

// fraction object top/bot: keeps itself in lowest terms, write in latex, assignment, equality check
function frac(top,bot)
{
	this.top=typeof(top)!='undefined'?top:0;
	this.bot=typeof(bot)!='undefined'?bot:1;
	this.write=function()
	{
		this.reduce();
		if(this.bot==1) return this.top;
		if(this.top==0) return "0";
		else if(this.top>0) return "\\frac{"+this.top+"}{"+this.bot+"}";
		else return "-\\frac{"+Math.abs(this.top)+"}{"+this.bot+"}";
	}
	this.reduce=function()
	{
		if(this.bot<0)
		{
			this.top*=-1;
			this.bot*=-1;
		}
		var c=gcd(Math.abs(this.top),this.bot);
		this.top/=c;
		this.bot/=c;
	}
	this.set=function(a,b)
	{
		this.top=a;
		this.bot=b;
		this.reduce();
	}
	this.equals=function(b)
	{
		this.reduce();
		b.reduce();
		if(this.top==b.top&&this.bot==b.bot) return 1;
		else return 0;
	}
	this.add=function(c,d)
	{
		if(typeof(d)=='undefined') d=1;
		this.set(this.top*d+this.bot*c,this.bot*d);
		this.reduce();
	}
	this.prod=function(c)
	{
		if(typeof(c)!='frac') c=new frac(c, 1);
		this.set(this.top*c.top, this.bot*c.bot);
		this.reduce();
	}
	this.reduce();
}

// vector object: can be set manually or randomly, dot product with another vector, its magnitude squared, write it in latex, 
function vector(dim)
{
	this.dim=dim;
	this.set=function()
	{
		this.dim=this.set.arguments.length;
		for(var i=0;i<this.dim;i++) this[i]=this.set.arguments[i];
	}	
	this.setrand=function(maxentry)
	{
		for(var i=0;i<this.dim;i++) this[i]=Math.round(-maxentry+2*maxentry*Math.random());
	}
	this.dot=function(U)
	{
		sum=0;
		for(var i=0;i<dim;i++) sum+=this[i]*U[i];
		return sum;
	}
	this.mag=function()
	{
		return this.dot(this);
	}
	this.write=function()
	{
		var q="\\left(\\begin{array}{c}"+this[0];
		for(var i=1;i<this.dim;i++) q=q+"\\\\"+this[i];
		return q+"\\end{array}\\right)";
	}
}

// Write a number as a coefficient (1 disappears, -1 becomes -)
function ascoeff(a)
{
	if(a==1)
		return("");
	if(a==-1)
		return("-");
	return(a);
}

// Write a number as a |coefficient| (+-1 disappears)
function abscoeff(a)
{
	a=Math.abs(a);
	if(a==1)
		return("");
	return(a);
}

// write a fractional coefficient
function fcoeff(f, t)
{
	if(f.top==f.bot)
		return(t);
	if(f.top==0)
		return("");
	return(f.write()+t);
}

// write a fractional coefficient's modulus
function fbcoeff(f, t)
{
	var g=new frac(Math.abs(f.top), Math.abs(f.bot));
	if(g.top==g.bot)
		return(t);
	if(g.top==0)
		return("");
	return(g.write()+t);
}

// Express a list of polynomial factors (x+a[0])(x+a[1])...
function express(a)
{
	var r="";
	var n=a.length;
	var p=ranking(a);
	var q;
	var t=0;
	s=new poly(1);
	s[1]=1;
	for(var i=0;i<n;i++)
	{
		if(i && a[p[i]]==q)
		{
			t++;
		}
		else
		{
			if(t)
				r+="^"+(t+1);
			t=0;
			s[0]=a[p[i]];
			r+='('+s.write()+')';
			q=a[p[i]];
		}
	}
	if(t)
		r+="^"+(t+1);
	return(r)
}

function polyexpand(a, b)
{
	p=new poly(a.rank+b.rank);
	p.setrand(0); // set all entries to 0
	for(var i=0;i<=a.rank;i++)
	{
		for(var j=0;j<=b.rank;j++)
		{
			p[i+j]+=a[i]*b[j];
		}
	}
	return p;
}

function p_quadratic(a, b, c)
{
	p=new poly(2);
	p.set(c, b, a);
	return p; // = ax^2 + bx + c
}

function p_linear(a, b)
{
	p=new poly(1);
	p.set(b, a);
	return p; // = ax + b
}

function p_const(a)
{
	p=new poly(0);
	p.set(a);
	return p; // = a
}

// polynomial (over Z) object: can be set manually or randomly, nonzero terms counted, computed at an x value, multiplied by a constant, differentiated, write it in latex, used in several other functions
// REMEMBER: it's stored backwards (x^0 term first)
function poly(rank)
{
	this.rank=rank;
	this.terms=function()
	{
		var n=0;
		for(var i=0;i<=this.rank;i++) if(this[i]) n++;
		return n;
	}
	this.set=function()
	{
		this.rank=this.set.arguments.length-1;
		for(var i=0;i<=this.rank;i++) this[i]=this.set.arguments[i];
	}
	this.setrand=function(maxentry)
	{
		for(var i=0;i<=this.rank;i++) this[i]=Math.round(-maxentry+2*maxentry*Math.random());
		if(this[this.rank]==0) this[this.rank]=maxentry;
	}
	this.compute=function(x)
	{
		var y=0;
		for(var i=0;i<=this.rank;i++) y+=this[i]*Math.pow(x, i);
		return y;
	}
	this.gcd=function()
	{
		var a=this[this.rank];
		for(var i=0;i<this.rank;i++) a=gcd(a, this[i]);
		return a;
	}
	this.xthru=function(x)
	{
		for(var i=0;i<=this.rank;i++)
		{
			this[i]=(this[i]*x);
		}
	}
	this.addp=function(x)
	{
		for(var i=0;i<=this.rank;i++)
		{
			this[i]=this[i]+x[i];
		}
	}
	this.diff=function(d)
	{
		d.rank=rank-1;
		for(var i=0;i<this.rank;i++) d[i]=this[i+1]*(i+1);
	}
	this.integ=function(d)
	{
		d.rank=rank+1;
		for(var i=0;i<this.rank;i++) d[i+1]=this[i]/(i+1);
	}
	this.write=function(l)
	{
		if(typeof(l)=='undefined')
		{
			l='x';
		}
		var q="";
		var j=false;
		for(var i=this.rank;i>=0;i--)
		{
			if(this[i]<0)
			{
				if(j) q+=' ';
				q+='- ';
				j=false;
			}
			else if(j&&this[i])
			{
				q+=' + ';
				j=false;
			}
			if(this[i])
			{
				switch(i)
				{
					case 0:
						q+=Math.abs(this[i]); j=true;
					break;
					case 1:
						if(Math.abs(this[i])==1)
							q+=l;
						else
							q+=Math.abs(this[i])+l;
						j=true;
					break;
					default:
						if(Math.abs(this[i])==1)
							q+=l+'^'+i;
						else
							q+=Math.abs(this[i])+l+'^'+i;
						j=true;
					break;
				}
			}
		}
		return q;
	}
	this.rwrite=function()
	{
		var q="";
		var j=false;
		for(var i=0;i<=this.rank;i++)
		{
			if(this[i]<0)
			{
				if(j) q+=' ';
				q+='- ';
				j=false;
			}
			else if(j&&this[i])
			{
				q+=' + ';
				j=false;
			}
			if(this[i])
			{
				switch(i)
				{
					case 0:
						q+=Math.abs(this[i]); j=true;
					break;
					case 1:
						if(Math.abs(this[i])==1)
							q+='x';
						else
							q+=Math.abs(this[i])+'x';
						j=true;
					break;
					default:
						if(Math.abs(this[i])==1)
							q+='x^'+i;
						else
							q+=Math.abs(this[i])+'x^'+i;
						j=true;
					break;
				}
			}
		}
		return q;
	}
}

// Polynomial over Q
function fpoly(rank)
{
	this.rank=rank;
	this.terms=function()
	{
		var n=0;
		for(var i=0;i<=this.rank;i++) if(this[i]) n++;
		return n;
	}
	this.set=function()
	{
		this.rank=this.set.arguments.length-1;
		for(var i=0;i<=this.rank;i++) this[i]=this.set.arguments[i];
	}
	this.setrand=function(maxentry)
	{
		for(var i=0;i<=this.rank;i++) this[i]=randfrac(12);
		if(this[this.rank].top==0) this[this.rank].top=maxentry;
		this[this.rank].reduce();
	}
	this.setpoly=function(a) // set from a poly (over Z) object
	{
		this.rank=a.rank;
		for(var i=0;i<=this.rank;i++) this[i]=new frac(a[i], 1);
	}
	this.compute=function(x)
	{
		if(typeof(x)!='frac')
			x=new frac(x, 1);
		var y=new frac(0, 1);
		for(var i=0;i<=this.rank;i++)
			y.add(this[i].top*Math.pow(x.top, i), this[i].bot*Math.pow(x.bot, i));
		y.reduce();
		return y;
	}
	this.gcd=function()
	{
		var g=frac(0, 1);
		for(var i=0;i<this.rank;i++) g.bot*=this[i].bot;
		var a=this[this.rank].top*g.bot/this[this.rank].bot;
		for(var i=0;i<this.rank;i++) a=gcd(a, this[i].top*g.bot/this[i].bot);
		g.reduce();
		return g;
	}
	this.xthru=function(x)
	{
		for(var i=0;i<=this.rank;i++)
		{
			this[i].prod(x);
		}
	}
	this.diff=function(d)
	{
		d.rank=rank-1;
		for(var i=0;i<this.rank;i++)
		{
			d[i]=this[i+1];
			d[i].prod(frac(i+1, 1));
		}
	}
	this.integ=function(d)
	{
		d.rank=this.rank+1;
		d[0]=new frac();
		for(var i=0;i<=this.rank;i++)
		{
			d[i+1]=this[i];
			d[i+1].bot*=(i+1);
			d[i+1].reduce();
		}
	}
	this.write=function()
	{
		var q="";
		var j=false;
		for(var i=this.rank;i>=0;i--)
		{
			var val=this[i].top/this[i].bot;
			if(val<0)
			{
				if(j) q+=' ';
				q+='- ';
				j=false;
			}
			else if(j&&val)
			{
				q+=' + ';
				j=false;
			}
			if(val)
			{
				var a=new frac(Math.abs(this[i].top), this[i].bot);
				switch(i)
				{
					case 0:
						q+=a.write(); j=true;
					break;
					case 1:
						if(a.top==a.bot)
							q+='x';
						else
							q+=a.write()+'x';
						j=true;
					break;
					default:
						if(a.top==a.bot)
							q+='x^'+i;
						else
							q+=a.write()+'x^'+i;
						j=true;
					break;
				}
			}
		}
		return q;
	}
	this.rwrite=function()
	{
		var q="";
		var j=false;
		for(var i=0;i<=this.rank;i++)
		{
			var val=this[i].top/this[i].bot;
			if(val<0)
			{
				if(j) q+=' ';
				q+='- ';
				j=false;
			}
			else if(j&&val)
			{
				q+=' + ';
				j=false;
			}
			if(val)
			{
				var a=new frac(Math.abs(this[i].top), this[i].bot);
				switch(i)
				{
					case 0:
						q+=a.write(); j=true;
					break;
					case 1:
						if(a.top==a.bot)
							q+='x';
						else
							q+=a.write()+'x';
						j=true;
					break;
					default:
						if(a.top==a.bot)
							q+='x^'+i;
						else
							q+=a.write()+'x^'+i;
						j=true;
					break;
				}
			}
		}
		return q;
	}
}
