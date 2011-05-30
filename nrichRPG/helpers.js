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
	this.cross=function(U)
	{
		if((this.dim==3)&&(U.dim==3))
		{
			var res=new vector(3);
			res.set(0, 0, 0);
			for(var i=0;i<3;i++)
			{
				for(var j=0;j<3;j++)
				{
					for(var k=0;k<3;k++)
					{
						// (axb)i = eijk aj bk
						res[i]+=epsi(i, j, k)*this[j]*U[k];
					}
				}
			}
			return(res); // = this x U
		}
		else
		{
			console.log("vector.cross() called on vectors other than 3D");
			console.log(this);
			console.log(U);
		}
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

// Levi-Civita symbol on {n, n+1, n+2} for n \in Z
function epsi(i, j, k)
{
	return((i-j)*(j-k)*(k-i)/2);
}

// square matrix object
function matrix(dim)
{
	this.dim=dim;
	this.set=function()
	{
		var n=Math.round(Math.sqrt(this.set.arguments.length));
		if(this.set.arguments.length==n*n)
		{
			this.dim=n;
			for(var i=0;i<n;i++)
			{
				this[i]=new Array(this.dim);
				for(var j=0;j<n;j++)
				{
					this[i][j]=this.set.arguments[(i*n)+j];
				}
			}
		}
		else
		{
			alert('Non-square number of elements sent to matrix.set()!');
		}
	}
	this.setrand=function(maxentry)
	{
		for(var i=0;i<this.dim;i++)
		{
			this[i]=new Array(this.dim);
			for(var j=0;j<this.dim;j++)
			{
				this[i][j]=Math.round(-maxentry+2*maxentry*Math.random());
			}
		}
	}
	this.add=function(a)
	{
		if(this.dim!=a.dim)
		{
			alert('Size mismatch matrices sent to matrix.add()!');
		}
		else
		{
			var s=new matrix(this.dim);
			for(var i=0;i<this.dim;i++)
			{
				s[i]=new Array(this.dim);
				for(var j=0;j<this.dim;j++)
				{
					s[i][j]=this[i][j]+a[i][j];
				}
			}
			return(s);
		}
	}
	this.times=function(a) // Returns This*A, not A*This (they're different!)
	{
		if(this.dim!=a.dim) // since we only deal in square matrices, they have to be the same size
		{
			alert('Size mismatch matrices sent to matrix.times()!');
		}
		else
		{
			var s=new matrix(this.dim);
			for(var i=0;i<this.dim;i++)
			{
				s[i]=new Array(this.dim);
				for(var j=0;j<this.dim;j++)
				{
					s[i][j]=0;
				}
			}
			for(var i=0;i<this.dim;i++)
			{
				for(var j=0;j<this.dim;j++)
				{
					for(var k=0;k<this.dim;k++)
					{
						s[i][k]+=this[i][j]*a[j][k]; // (AB)ik=AijBjk
					}
				}
			}
			return(s);
		}
	}
	this.det=function()
	{
		var res=0;
		if(this.dim==2)
		{
			return(this[0][0]*this[1][1] - this[0][1]*this[1][0]);
		}
		else if(this.dim==1)
		{
			return(this[0][0]);
		}
		else if(this.dim==0)
		{
			return(1);
		}
		else
		{
			// Laplace expansion by first row.  It's slow, but it still works (and it's more maintainable than the other, quicker algos.  Besides, we're only going up to 3x3.  It's still bugged though :S
			for(var i=0;i<this.dim;i++) // which column
			{
				var minor=new matrix(this.dim-1);
				for(var j=0;j<this.dim-1;j++)
				{
					minor[j]=new Array(this.dim-1);
					for(var k=0;k<this.dim-1;k++)
					{
						minor[j][k]=this[j+1][k>=i?k+1:k];
					}
				}
				res+=minor.det()*(i%2==1?-1:1)*this[0][i];
			}
		}
		return(res);
	}
	this.T=function()
	{
		var res=new matrix(this.dim);
		for(var i=0;i<this.dim;i++)
		{
			res[i]=new Array(this.dim);
			for(var j=0;j<this.dim;j++)
			{
				res[i][j]=this[j][i];
			}
		}
		return(res);
	}
	this.inv=function()
	{
		var d=this.det();
		if(d==0)
		{
			alert('Singular matrix sent to matrix.inv()!');
		}
		else
		{
			if(this.dim==2)
			{
				var res=new matrix(2);
				res.set(this[1][1]/d, -this[0][1]/d, -this[1][0]/d, this[0][0]/d);
				return(res);
			}
			var cof=new matrix(this.dim);
			for(var i=0;i<this.dim;i++)
			{
				cof[i]=new Array(this.dim);
				for(var j=0;j<this.dim;j++)
				{
					var minor=new matrix(this.dim-1);
					for(var k=0;k<this.dim-1;k++)
					{
						minor[k]=new Array(this.dim);
						for(var l=0;l<this.dim-1;l++)
						{
							minor[k][l]=this[k>=i?k+1:k][l>=j?l+1:l];
						}
					}
					cof[i][j]=minor.det()*((i+j)%2==1?-1:1)/d;
				}
			}
			return(cof.T());
		}
	}
	this.tr=function()
	{
		var res=0;
		for(var i=0;i<this.dim;i++)
			res+=this[i][i];
		return(res);
	}
	this.write=function(l)
	{
		if(typeof(l)=='undefined')
			l=["(",")"];
		var res="\\left"+l[0]+"\\begin{array}{"+"c".repeat(this.dim)+"}";
		for(var i=0;i<this.dim;i++)
		{
			for(var j=0;j<this.dim;j++)
			{
				res+=guessExact(this[i][j]);
				if(j==this.dim-1)
				{
					if(i==this.dim-1)
					{
						res+="\\end{array}\\right"+l[1];
					}
					else
					{
						res+="\\\\";
					}
				}
				else
				{
					res+="&";
				}
			}
		}
		return(res);
	}
}

String.prototype.repeat = function(num)
{
    return(new Array(num+1).join(this));
}
