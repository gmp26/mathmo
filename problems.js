// nRich RPG (Randomised Problems Generator)

egfn=function(){};
egparms=0;

// Partial Fractions
function makePartial()
{
	function makePartial1()
	{
		var a=randnz(8);
		var b=new poly(1);b.setrand(8)
		if(b[1]<0)
		{
			b.xthru(-1);
			a=-a;
		}
		var e=gcd(a, b.gcd());
		if(e>1)
		{
			b.xthru(1/e);
			a/=e;
		}
		var c=randnz(8);
		var d=new poly(1);d.setrand(8)
		if(d[1]<0)
		{
			d.xthru(-1);
			c=-c;
		}
		var f=gcd(c, d.gcd());
		if(f>1)
		{
			d.xthru(1/f);
			c/=f;
		}
		if(b[1]==d[1]&&b[0]==d[0]) d[0]=-d[0];
		
		var aString=(a>0?"":"-")+"\\frac{"+Math.abs(a)+"}{"+b.write()+"}"+(c>0?"+":"-")+"\\frac{"+Math.abs(c)+"}{"+d.write()+"}";
		
		var bot=polyexpand(b, d);
		b.xthru(c);
		d.xthru(a);
		b.addp(d);
		
		var qString="\\mbox{Express }\\frac{"+b.write()+"}{"+bot.write()+"}\\mbox{ in partial fractions.}";
		
		var qa=[qString,aString];
		return qa;
	}
	function makePartial2()
	{
		var m=distrandnz(3, 3);
		var d=randnz(4),e=randnz(3),f=randnz(3);
		var l=ranking(m);
		var n=[d, e, f];
		var a=m[l[0]], b=m[l[1]], c=m[l[2]];
		d=n[l[0]];e=n[l[1]];f=n[l[2]];
		var u=new poly(1),v=new poly(1),w=new poly(1);
		u[1]=v[1]=w[1]=1;
		u[0]=a;v[0]=b;w[0]=c;
		var p=polyexpand(polyexpand(u, v), w);
		var qString="\\mbox{Express }\\frac{"+p.write()+"}{"+express([a, b, c])+"}\\mbox{ in partial fractions.}";
		var aString=(d>0?"":"-")+"\\frac{"+Math.abs(d)+"}{"+u.write()+"}"+(e>0?"+":"-")+"\\frac{"+Math.abs(e)+"}{"+v.write()+"}"+(f>0?"+":"-")+"\\frac{"+Math.abs(f)+"}{"+w.write()+"}";
		var qa=[qString,aString];
		return qa;
	}
	var qa;
	if(rand()) qa=makePartial1();
	else qa=makePartial2();
	return qa;
}

// Binomial Theorem
function makeBinomial2()
{
	var p=new poly(1);
	p[0]=rand(1,5);
	p[1]=randnz(6-p[0]);
	var n=Math.round(3+Math.random()*(3-Math.max(0,Math.max(p[0]-3,p[1]-3))));
	
	var q=new poly(3);
	q[0]=Math.pow(p[0],n);
	q[1]=n*Math.pow(p[0],n-1)*p[1];
	q[2]=n*(n-1)*Math.pow(p[0],n-2)/2*Math.pow(p[1], 2);
	q[3]=n*(n-1)*(n-2)*Math.pow(p[0],n-3)/6*Math.pow(p[1], 3);

	qString="\\mbox{Evaluate }("+p.rwrite()+")^"+n+"\\mbox{ to the fourth term.}";
	aString=q.rwrite()+".";

	var qa=[qString, aString];
	return qa;
}

// Polynomial Integration
function makePolyInt()
{
	var A=rand(-3,2);
	var B=rand(A+1,3);
	
	a=new poly(3);
	a.setrand(6);
	b=new fpoly(3);
	b.setpoly(a);
	c=new fpoly(4);
	b.integ(c);
	
	qString="\\mbox\{Evaluate\}\\int_\{"+A+"\}^\{"+B+"\}"+a.write()+"\\,dx";
	var hi=c.compute(B);
	var lo=c.compute(A);
	lo.prod(-1);
	ans=new frac(hi.top, hi.bot);
	ans.add(lo.top, lo.bot);
	aString=ans.write();
	
	var qa = [qString, aString];
	return qa;
}

// Simple Trig Integration
function makeTrigInt()
{
	var a=rand(0,7);
	var b=rand(1-Math.min(a,1),8);
	var A=a?randnz(4):0;
	var B=b?randnz(4):0;
	var U=pickrand(2,3,4,6);

	term1=a?ascoeff(A)+"\\sin\{"+ascoeff(a)+"x\}":"";
	term2=b?abscoeff(B)+"\\cos\{"+ascoeff(b)+"x\}":"";

	qString="\\mbox\{Evaluate\}\\int_\{0\}^\{\\pi/"+U+"\}"+(a?b?term1+(B>0?" + ":" - ")+term2:term1:(B<0?"-":"")+term2)+"\\,dx";

	soln1=new Array(6);
	soln2=new Array(6);
	soln=new Array(6);

	if(a)
	{
		soln1=cospi(a,U);
		for(i=0;i<6;i+=2) soln1[i]*=-A;
		for(i=1;i<6;i+=2) soln1[i]*=a;
		if(soln1[0])
		{
			soln1[0]=soln1[1]*A+a*soln1[0];
			soln1[1]*=a;
		}
		else
		{
			soln1[0]=A;
			soln1[1]=a;
		}
	}
	else soln1=[0,1,0,1,0,1];

	if(b)
	{
		soln2=sinpi(b,U);
		for(i=0;i<6;i+=2) soln2[i]*=B;
		for(i=1;i<6;i+=2) soln2[i]*=b;
	}
	else soln2=[0,1,0,1,0,1];

	for(i=0;i<6;i+=2)
	{
		soln[i]=soln1[i]*soln2[i+1]+soln1[i+1]*soln2[i];
		soln[i+1]=soln1[i+1]*soln2[i+1];
		if(soln[i+1]<0)
		{
			soln[i]*=-1;
			soln[i+1]*=-1;
		}
		if(soln[i])
		{
			c=gcd(Math.abs(soln[i]),soln[i+1]);
			soln[i]/=c;
			soln[i+1]/=c;
		}
	} 
	aString="";
	if(soln[0]&&soln[1]==1) aString+=soln[0];
	else if(soln[0]>0) aString+="\\frac\{"+soln[0]+"\}\{"+soln[1]+"\}";
	else if(soln[0]<0) aString+="-\\frac\{"+(-soln[0])+"\}\{"+soln[1]+"\}";
	if(soln[2]&&soln[3]==1) aString+=(aString.length?soln[2]>0?"+":"":"")+soln[2]+"\\sqrt\{2\}";
	else if(soln[2]>0) aString+=(aString.length?"+":"")+"\\frac\{"+soln[2]+"\}\{"+soln[3]+"\}\\sqrt\{2\}";
	else if(soln[2]<0) aString+="-\\frac\{"+(-soln[2])+"\}\{"+soln[3]+"\}\\sqrt\{2\}";
	if(soln[4]&&soln[5]==1) aString+=(aString.length?soln[4]>0?"+":"":"")+soln[4]+"\\sqrt\{3\}";
	else if(soln[4]>0) aString+=(aString.length?"+":"")+"\\frac\{"+soln[4]+"\}\{"+soln[5]+"\}\\sqrt\{3\}";
	else if(soln[4]<0) aString+="-\\frac\{"+(-soln[4])+"\}\{"+soln[5]+"\}\\sqrt\{3\}";

	if(aString=="") aString="0";
	var qa=[qString,aString];
	return qa;
}

// Vectors
function makeVector()
{
	function ntol(n)
	{
		return String.fromCharCode(n+"A".charCodeAt(0));
	}
	A=new Array(4);
	for(var i=0;i<4;i++)
	{
		A[i]=new vector(3);
		A[i].setrand(10);
	}	
	B=new Array(0,1,2,3);
	for(var i=0;i<3;i++)
	{
		if(A[B[i]].mag()<A[B[i+1]].mag())
		{
			var c=B[i];
			B[i]=B[i+1];
			B[i+1]=c;
			i=-1;
		}
	}
	var v=distrand(3, 0, 3);
	
	qString="\\begin\{array\}\{l\}\\mbox\{Consider the four vectors \} \\mathbf\{A\}="+A[0].write()+", \\mathbf\{B\}="+A[1].write()+", \\mathbf\{C\}="+A[2].write()+", \\mathbf\{D\}="+A[3].write()+".\\\\ \\\\ \\mbox\{	(i) Order the vectors by magnitude.\}\\\\ \\\\ \\mbox\{	(ii) Use the scalar product to find the angles between (a) \}\\mathbf\{"+ntol(v[0])+"\} \\mbox\{ and \}\\mathbf\{"+ntol(v[1])+"\}, \\mbox\{(b) \}\\mathbf\{"+ntol(v[1])+"\} \\mbox\{ and \} \\mathbf\{"+ntol(v[2])+"\}.\\end\{array\}";

	aString="\\begin\{array\}\{l\}\\mbox\{(i) \}|\\mathbf\{"+ntol(B[0])+"\}|=\\sqrt\{"+A[B[0]].mag()+"\},|\\mathbf\{"+ntol(B[1])+"\}|=\\sqrt\{"+A[B[1]].mag()+"\},|\\mathbf\{"+ntol(B[2])+"\}|=\\sqrt\{"+A[B[2]].mag()+"\},|\\mathbf\{"+ntol(B[3])+"\}|=\\sqrt\{"+A[B[3]].mag()+"\}.\\\\";

	top1=A[v[0]].dot(A[v[1]]);
	bot1=new sqroot(A[v[0]].mag()*A[v[1]].mag());
	var c=gcd(Math.abs(top1),bot1.a);
	top1/=c;
	bot1.a/=c;
	top2=A[v[1]].dot(A[v[2]]);
	bot2=new sqroot(A[v[1]].mag()*A[v[2]].mag());
	c=gcd(Math.abs(top2),bot2.a);
	top2/=c;
	bot2.a/=c;

	aString+="\\mbox\{(ii) (a) \}";
	if(top1==0) aString+="\\pi/2";
	else if(top1==1&&bot1.n==1&&bot1.a==1) aString+="0";
	else if(top1==-1&&bot1.n==1&&bot1.a==1) aString+="\\pi";
	else
	{
		aString+="\\arccos\\left(";
		if(bot1.a==1&&bot1.n==1) aString+=top1;
		else aString+="\\frac\{"+top1+"\}\{"+bot1.write()+"\}";
		aString+="\\right)";
	}
	aString+="\\mbox\{,	(b) \}";
	if(top2==0) aString+="\\pi/2";
	else if(top2==1&&bot2.n==1&&bot2.a==1) aString+="0";
	else if(top2==-1&&bot2.n==1&&bot2.a==1) aString+="\\pi";
	else
	{ 
		aString+="\\arccos\\left(";
		if(bot2.a==1&&bot2.n==1) aString+=top2;
		else aString+="\\frac\{"+top2+"\}\{"+bot2.write()+"\}";
		aString+="\\right)";
	}
	aString+=".\\end\{array\}";
 
	var qa=[qString,aString];
	return qa;
}

// Lines in 3D
function makeLines()
{
	var a1=randnz(3);
	var b1=randnz(3);
	var c1=randnz(3);
	var d1=rand(3);
	var e1=rand(3);
	var f1=rand(3);
	var a2,b2,c2,d2,e2,f2;
	var ch=rand(1,10); 
	if(ch<6)
	{
		a2=randnz(3);
		b2=randnz(3);
		c2=randnz(3);
		d2=rand(3);
		e2=rand(3);
		f2=rand(3);
	}
	else if(ch<10)
	{
		a2=randnz(2);
		b2=randnz(2);
		c2=randnz(2);
		if(a1*b1*c1%3==0&&a1*b1*c1%2==0)
		{
			if(rand())
			{
				if(a1%3==0) a1/=3;
				if(b1%3==0) b1/=3;
				if(c1%3==0) c1/=3;
			}
			else
			{
				if(a1%2==0) a1/=2;
				if(b1%2==0) b1/=2;
				if(c1%2==0) c1/=2;
			}
		}
		if(a2*d1%a1!=0)
		{
			a2*=a1; b2*=a1; c2*=a1;
		}
		if(b2*e1%b1!=0)
		{
			a2*=b1; b2*=b1; c2*=b1;
		}
		if(c2*f1%c1!=0)
		{
			a2*=c1; b2*=c1; c2*=c1;
		}
		d2=a2*d1/a1;
		e2=b2*e1/b1;
		f2=c2*f1/c1;
		var m1=Math.abs(Math.min(d2,Math.min(e2,f2)));
		var m2=Math.max(d2,Math.max(e2,f2));
		if(m1>4) { d2+=4; e2+=4; f2+=4; }
		if(m2>4) { d2-=2; e2-=2; f2-=2; }
		if((m1=gcd(a2,b2,c2,d2,e2,f2))>1)
		{
			a2/=m1;b2/=m1;c2/=m1;d2/=m1;e2/=m1;f2/=m1;
		}
	}
	else
	{
		var sn=randnz(2);
		a2=a1*sn;
		b2=b1*sn;
		c2=c1*sn;
		d2=rand(3);
		e2=rand(3);
		f2=rand(3);
	}
	p1=new poly(1);p1[0]=d1;p1[1]=a1;
	q1=new poly(1);q1[0]=e1;q1[1]=b1;
	r1=new poly(1);r1[0]=f1;r1[1]=c1;
	p2=new poly(1);p2[0]=d2;p2[1]=a2;
	q2=new poly(1);q2[0]=e2;q2[1]=b2;
	r2=new poly(1);r2[0]=f2;r2[1]=c2;
	var eqn1=p1.write('x')+"="+q1.write('y')+"="+r1.write('z');
	var eqn2=p2.write('x')+"="+q2.write('y')+"="+r2.write('z');

	qString="\\begin{array}{l}\\mbox{Consider the lines }"+eqn1+"\\mbox{ and }"+eqn2+".\\\\ \\mbox{Find the angle between them and determine whether they intersect.}\\end{array}";

	if(a1*b2==b1*a2&&b1*c2==c1*b2)
	{
		if(a2*b2*d1-b2*a1*d2==a2*b2*e1-a2*b1*e2&&b2*c2*e1-c2*b1*e2==b2*c2*f1-b2*c1*f2) aString="\\mbox{The lines are identical.}";
		else aString="\\mbox{The lines are parallel and do not meet.}";
	}

	else
	{
		cosbot=new sqroot((b1*b1*c1*c1+c1*c1*a1*a1+a1*a1*b1*b1)*(b2*b2*c2*c2+c2*c2*a2*a2+a2*a2*b2*b2));
		costh=new frac(b1*b2*c1*c2+c1*c2*a1*a2+a1*a2*b1*b2,cosbot.a);
		cosbot.a=costh.bot;
		aString="\\mbox{The angle between the lines is }";
		if(costh.top==0) aString+="\\pi/2.";
		else
		{
			aString+="\\arccos\\left(";
			if(cosbot.n==1) aString+=costh.write();
			else aString+="\\frac{"+costh.top+"}{"+cosbot.write()+"}";
			aString+="\\right)."
		}
		mu=new frac();
		lam1=new frac();
		lam2=new frac();
		if(a1*b2-a2*b1)
		{
			mu.set(a2*b2*(e1-d1)-a2*b1*e2+a1*b2*d2,a1*b2-a2*b1);
			lam1.set(b1*mu.top-b1*e2*mu.bot+e1*b2*mu.bot,mu.bot*b2);
			lam2.set(c1*mu.top-c1*f2*mu.bot+f1*c2*mu.bot,mu.bot*c2);
		}
		else
		{
			mu.set(b2*c2*(f1-e1)-b2*c1*f2+b1*c2*e2,b1*c2-b2*c1);
			lam1.set(c1*mu.top-c1*f2*mu.bot+f1*c2*mu.bot,mu.bot*c2);
			lam2.set(a1*mu.top-a1*d2*mu.bot+d1*a2*mu.bot,mu.bot*a2);
		}
		if(lam1.equals(lam2))
		{
			xm=new frac(lam1.top-d1*lam1.bot,a1*lam1.bot);
			ym=new frac(lam1.top-e1*lam1.bot,b1*lam1.bot);
			zm=new frac(lam1.top-f1*lam1.bot,c1*lam1.bot);
			aString+="\\mbox{ The lines meet at the point }\\left("+xm.write()+","+ym.write()+","+zm.write()+"\\right).";
		}
		else aString+="\\mbox{ The lines do not meet.}";
	}
	var qa=[qString,aString];
	return qa;
}

function makeIneq()
{
	function makeIneq2()
	{
		var roots=distrandnz(2, 6);
		var B=-roots[0]-roots[1];
		var C=roots[0]*roots[1];
		var qString="\\begin{array}{c}\\mbox{By factorizing a suitable polynomial, or otherwise, find the values of }x\\mbox{ which satisfy }\\\\ ";
		var p=new poly(2);
		switch(rand(1,3))
		{
			case 1:
				p[0]=0;p[1]=B;p[2]=1;
				qString+=p.write()+" < "+(-C);
			break;
			case 2:
				p[0]=C;p[1]=0;p[2]=1;
				qString+=p.write()+" < "+(B?ascoeff(B)+"x":"0");
			break;
			case 3:
				p[0]=-C;p[1]=-B;p[2]=0;
				qString+="x^2"+" < "+p.write();
			break;
		}
		qString+=" \\end{array}";
		var aString=Math.min(roots[0],roots[1])+" < x < "+Math.max(roots[0], roots[1]);
		var qa=[qString,aString];
		return qa;
	}

	function makeIneq3()
	{
		var a=randnz(5);
		var b=randnz(5);
		var c=rand(2);
		var qString="\\begin{array}{c}\\mbox{By factorizing a suitable polynomial, or otherwise, find the values of }y\\mbox{ which satisfy }\\\\ ";
		var B=-(a+b+c);
		var C=a*b+b*c+c*a;
		var D=-a*b*c;
		var p=new poly(3);p.set(0,0,0,1);
		var q=new poly(2);q.set(0,0,0);
		switch(rand(1,3))
		{
			case 1:
				p[2]=B;q[1]=-C;q[0]=-D;
			break;
			case 2:
				p[1]=C;q[2]=-B;q[0]=-D;
			break;
			case 3:
				p[0]=D;q[2]=-B;q[1]=-C;
			break;
		}
		qString+=p.write('y')+" < "+q.write('y')+" \\end{array}";
		var m=[a,b,c];
		var r=ranking(m);
		var aString="y < "+m[r[0]];
		if(m[r[1]]!=m[r[2]]) aString+="\\mbox{ and }"+m[r[1]]+" < y < "+m[r[2]];
		var qa=[qString,aString];
		return qa;
	}
	var qa=rand() ? makeIneq2() : makeIneq3();
	return qa;
}

function makeAP()
{
	var m=rand(2,6);
	var n=rand(m+2,11);
	var k=rand(Math.max(n+3,10),40);
	a1=new frac();
	a2=new frac();
	var qString="\\begin{array}{l}\\mbox{An arithmetic progression has "+ordt(m)+" term }\\alpha\\mbox{ and "+ordt(n)+" term }\\beta.\\\\\\mbox{Find the ";
	if(rand()==0)
	{ 
		qString+="sum to }"+k+"\\mbox{ terms.}";	
		a1.set(k*(2*n-1-k),2*(n-m));
		a2.set(k*(1+k-2*m),2*(n-m));
	}
	else
	{
		qString+="value of the "+ordt(k)+" term.}"
		a1.set(k-m,n-m);
		a2.set(n-k,n-m);
	}
	qString+="\\end{array}";
	var aString=fcoeff(a1, "\\alpha")+(a2.top>0?" + ":" - ")+fbcoeff(a2, "\\beta");
	var qa=[qString,aString];
	return qa;
}

function makeFactor()
{
	function makeFactor1()
	{
		var a=randnz(4), b=randnz(7), c=randnz(7);
		var u=new poly(1), v=new poly(1), w=new poly(1);
		u[1]=v[1]=w[1]=1;
		u[0]=a;v[0]=b;w[0]=c;
		var x=polyexpand(polyexpand(u, v), w);
		var qString="\\mbox{Divide }"+x.write()+"\\mbox{ by }("+u.write()+")\\mbox{ and hence factorise it completely.}";
		var aString=express([a, b, c]);
		var qa=[qString,aString];
		return qa;
	}
	function makeFactor2()
	{
		var a=randnz(2), b=randnz(5), c=randnz(5);
		var u=new poly(1), v=new poly(1), w=new poly(1);
		u[1]=v[1]=w[1]=1;
		u[0]=a;v[0]=b;w[0]=c;
		var x=polyexpand(polyexpand(u, v), w);
		var qString="\\mbox{Use the factor theorem to factorise }"+x.write()+".";
		var aString=express([a, b, c]);
		var qa=[qString,aString];
		return qa;
		}
	function makeFactor3()
	{
		var a=randnz(2), b=randnz(4), c=randnz(4), d=randnz(4);
		if(d==c) d=-d;
		var u=new poly(1), v=new poly(1), w=new poly(1), y=new poly(1);
		u[1]=v[1]=w[1]=y[1]=1;
		u[0]=a;v[0]=b;w[0]=c;y[0]=d;
		var x=polyexpand(polyexpand(u, v), w);
		var z=polyexpand(polyexpand(u, v), y);
		var qString="\\mbox{Simplify }\\frac{"+x.write()+"}{"+z.write()+"}.";
		var aString="\\frac{"+w.write()+"}{"+y.write()+"}";
		var qa=[qString,aString];
		return qa;
	}

	var qa;
	if(rand()) qa=makeFactor1();
	else if(rand()) qa=makeFactor2();
	else qa=makeFactor3();
	return qa;
}

function makeQuadratic()
{
	var qString="\\mbox{Find the real roots, if any, of }";
	var aString;
	if(rand())
	{
		var m=distrandnz(5);
		var p=new poly(2);
		p[2]=1;p[1]=m[0];p[0]=m[1];
		qString+=p.write();
		dcr=m[0]*m[0]-4*m[1];
		if(dcr<0)
		{
			aString="\\mbox{There are no real roots.}";
		}
		else if(dcr==0)
		{
			r1=new frac(-m[1],2);
			aString="x="+r1.write()+"\\mbox{ is a repeated root.}";
		}
		else
		{
			disc=new sqroot(dcr);
			r1=new frac(-m[1],2);
			if(disc.n==1)
			{
				r1.add(disc.a,2);
				aString="x="+r1.write()+"\\mbox{ and }x=";
				r1.add(-disc.a);
				aString+=r1.write();
			}
			else
			{
				r2=new frac(disc.a,2);
				aString="x="+r1.write()+"\\pm";
				if((r2.top!=1)||(r2.bot!=1)) aString+=r2.write();
				aString+="\\sqrt{"+disc.n+"}";
			}
		}
	}
	else
	{
		var roots=distrandnz(2, 5);
		var p=new poly(2);
		p[2]=1;p[1]=-roots[0]-roots[1];p[0]=roots[0]*roots[1];
		qString+=p.write();
		aString="x="+roots[0]+"\\mbox{ and }x="+roots[1];
	}
	qString+="=0";
	var qa=[qString,aString];
	return qa;		
}

function makeComplete()
{
	var a=randnz(4);
	var b=randnz(5);
	var p=new poly(2);
	p[2]=1;p[1]=-2*a;p[0]=a*a+b;
	var qString,aString;
	if(rand())
	{
		qString="\\mbox{By completing the square, find (for real }x\\mbox{) the minimum value of }"+p.write()+".";
		aString="\\mbox{The minimum value is }"+b+"\\mbox{ which occurs at }x="+a;
	}
	else
	{
		var c=randnz(3);
		var d=randnz(c+2,c+4);
		qString="\\mbox{Find the minimum value of }"+p.write()+"\\mbox{ in the range }"+c+"\\leq x\\leq"+d+".";
		if(c<=a&&a<=d) aString="\\mbox{The minimum value is }"+b+"\\mbox{ which occurs at }x="+a;
		else if(a<c) aString="\\mbox{The minimum value is }"+(c*c-2*a*c+a*a+b)+"\\mbox{ which occurs at }x="+c;
		else aString="\\mbox{The minimum value is }"+(d*d-2*a*d+a*a+b)+"\\mbox{ which occurs at }x="+d;
	}
	var qa=[qString,aString];
	return qa;
}

function makeBinExp()
{
	var a=rand(1,3);
	var b=randnz(2);
	var n=rand(2,5);
	var m=rand(1,n-1);
	pow=new frac(m,n);
	var p=new fpoly(1);
	p[0]=new frac(1,1);p[1]=new frac(b,a);
	var qString="\\mbox{Find the first four terms in the expansion of }\\left("+p.rwrite()+"\\right)^{"+pow.write()+"}";
	var q=new fpoly(3);
	q[0]=new frac(1);
	q[1]=new frac(m*b,n*a);
	q[2]=new frac(m*(m-n)*b*b,2*n*n*a*a);
	q[3]=new frac(m*(m-n)*(m-2*n)*b*b*b,6*n*n*n*a*a*a);
	var aString=q.rwrite();
	var qa=[qString,aString];
	return qa;
}

function makeLog()
{
	function makeLog1()
	{
		var a=pickrand(2,3,5);
		var m=rand(1,4);
		var n=rand(1,4);if(n>=m) n++;
		var qString="\\mbox{If }"+Math.pow(a,m)+"="+Math.pow(a,n)+"^{x} \\mbox{ find } x.";
		r=new frac(m,n);
		var aString="x="+r.write();
		var qa=[qString,aString];
		return qa;
	}
	function makeLog2()
	{
		var a=rand(2,9);
		var b=rand(2,5);
		var c=b*b;
		var qString="\\mbox{Find }x\\mbox{ if }"+c+"\\log_{x}"+a+"=\\log_{"+a+"}x.";
		var aString="x="+Math.pow(a,b);
		var qa=[qString,aString];
		return qa;
	}
	function makeLog3()
	{
		var a=rand(2,7);
		var b=Math.floor(Math.pow(a,7*Math.random()));
		var qString="\\mbox{If }"+a+"^{x}="+b+", \\mbox{ find }x\\mbox{ to three decimal places.}";
		c=new Number(Math.log(b)/Math.log(a));
		var aString="x="+c.toFixed(3);
		var qa=[qString,aString];
		return qa;
	}
	var qa;
	switch(rand(1,3))
	{
		case 1:	
			qa=makeLog1();
			break;
		case 2:
			qa=makeLog2();
			break;
		case 3:
			qa=makeLog3();
			break;
	}		
	return qa;				
}

function makeStationary()
{
	function makeStationary2()
	{
		var p=new poly(2);
		p.set(randnz(4), randnz(8), randnz(4));
		d=new frac(-p[1],2*p[2]);
		var qString="\\mbox{Find the stationary point of }y="+p.write()+"\\mbox{, and state whether it is a maximum or a minimum.}";
		var aString="x="+d.write()+",";
		if(p[2]>0) aString+="\\mbox{ minimum.}";
		else aString+="\\mbox{ maximum.}";
		var qa=[qString,aString];
		return qa;
	}
	function makeStationary3()
	{
		var p=new poly(3);
		var d=randnz(4), c=randnz(3), b=randnz(3), a=randnz(5);
		if((Math.abs(c*(b+a))%2)==1) b++; // I hope it doesn't matter that this can make b==0.
		p.set(d, 3*c*a*b, 3*c*(a+b)/2, c);
		var qString="\\mbox{Find the stationary points of }y="+p.write()+"\\mbox{, and state their nature.}";
		var aString;
		if(a==b) aString="x="+a+",\\mbox{ point of inflexion.}";
		else if(c>0) aString="x="+Math.min(a,b)+"\\mbox{, maximum, and }x="+Math.max(a,b)+"\\mbox{, minimum}";
		else aString="x="+Math.min(a,b)+"\\mbox{, minimum, and }x="+Math.max(a,b)+"\\mbox{, maximum}";
		var qa=[qString,aString];
		return qa;
	}	
	var qa;
	switch(rand(2,3))
	{
		case 2:
			qa=makeStationary2();
			break;
		case 3:
			qa=makeStationary3();
			break;	 
	}
	return qa;			
}

function makeTriangle()
{
	function makeTriangle1()
	{
		var a=rand(3,8);
		var b=rand(a+1,16);
		var m=distrand(3, 0, 2);
		var s=["AB", "BC", "CA"];
		var hyp=s[m[0]];
		var short=s[m[1]];
		var other=s[m[2]];
		var angle;
		switch(hyp) {
			case "AB":
				angle="C";
				break;
			case "BC":
				angle="A";
				break;
			case "CA":
				angle="B";
				break;
		}
		var qString="\\mbox{In triangle }ABC, "+short+"="+a+","+hyp+"="+b+",\\mbox{ and angle }"+angle+"\\mbox{ is a right angle. Find }"+other+".";
		length=new sqroot(b*b-a*a);
		var aString=other+"="+length.write();
		var qa=[qString,aString];
		return qa;
	}
	function makeTriangle2()
	{
		var a=rand(2,8);
		var b=rand(1,6);
		var c=rand(Math.max(a,b)-Math.min(a,b)+1,a+b-1);
		var qString="\\mbox{In triangle }ABC, AB="+c+",BC="+a+",\\mbox{ and }CA="+b+".\\mbox{ Find the angles of the triangle.}";
		aa=new frac(b*b+c*c-a*a,2*b*c);
		bb=new frac(c*c+a*a-b*b,2*c*a);
		cc=new frac(a*a+b*b-c*c,2*a*b);
		var aString="\\cos A="+aa.write()+",\\cos B="+bb.write()+",\\cos C="+cc.write()+".";
		var qa=[qString,aString];
		return qa;
	}
	function makeTriangle3()
	{
		var a=rand(1,6);
		var cc=pickrand(3,4,6);
		var lb=a*Math.ceil(Math.sin(Math.PI/cc))
		var c=rand(lb, Math.max(5, lb+1));
		var qString="\\mbox{In triangle }ABC, AB="+c+", BC="+a+"\\mbox{ and angle }C=\\frac{\\pi}{"+cc+"}. \\mbox{ Find angle }A.";
		d=new frac(a,2*c);
		var aString="A=\\arcsin\\left("+d.write();
		if(cc==3) aString+="\\sqrt{3}";
		else if(cc==4) aString+="\\sqrt{2}";
		aString+="\\right)";
		var qa=[qString,aString];
		return qa;
	}	
	var qa;
	switch(rand(1,3))
	{
		case 1:
			qa=makeTriangle1();
			break;
		case 2:
			qa=makeTriangle2();
			break;
		case 3:
			qa=makeTriangle3();
			break;	 
	}					 
	return qa;
} 

function makeCircle()
{
	var r=rand(2,8);
	var bot=rand(2,9);
	var top=rand(1,2*bot-1);
	prop=new frac(top,bot);
	var qString="\\begin{array}{c}\\mbox{Find, for a sector of angle }"+(prop.bot==1?ascoeff(prop.top)+"\\pi":"\\frac{"+ascoeff(prop.top)+"\\pi}{"+prop.bot+"}")+"\\mbox{ of a disc of radius }"+r+":\\\\ \\mbox{(i) the length of the perimeter; and (ii) the area.}\\end{array}";
	length=new frac(prop.top*r,prop.bot);
	area=new frac(prop.top*r*r,2*prop.bot);
	var aString="\\mbox{(i) }"+length.write()+"\\mbox{; (ii) }"+area.write();
	var qa=[qString,aString];
	return qa;
}	

function makeSolvingTrig()
{
	var A=pickrand(1,3,4,5);
	var alpha=pickrand(3,4,6);
	c=new frac(A,2);
	
	var qString="\\mbox{Write }"+c.write();
	if(alpha==3) qString+="\\sqrt{3}";
	else if(alpha==4) qString+="\\sqrt{3}";
	qString+="\\sin{\\theta}+"+c.write();
	if(alpha==4) qString+="\\sqrt{2}";
	else if(alpha==6) qString+="\\sqrt{3}";
	qString+="\\cos{\\theta}\\mbox{ in the form }A\\sin(\\theta+\\alpha),\\mbox{ where }A\\mbox{ and }\\alpha\\mbox{ are to be determined.}";
	var aString=(A==1?"":A)+"\\sin(\\theta+\\frac{\\pi}{"+alpha+"})";
	var qa=[qString,aString];
	return qa;
}

function makeVectorEq()
{
	a=new vector(3);
	a.setrand(6);
	b=new vector(3);
	b.setrand(6);
	l=distrand(3, 5);
	v=new Array(3);
	for(var i=0;i<3;i++)
	{
		v[i]=new vector(3);
		v[i].set(a[0]+l[i]*b[0],a[1]+l[i]*b[1],a[2]+l[i]*b[2]);
	}
	var qString="\\begin{array}{c}\\mbox{Show that the points with position vectors }\\\\"+v[0].write()+","+v[1].write()+","+v[2].write()+"\\\\";
	qString+="\\mbox{lie on a straight line and give the equation of the line in the form }\\mathbf{r}=\\mathbf{a}+\\lambda\\mathbf{b}.\\end{array}";
	var aString=a.write()+"+\\lambda"+b.write();
	var qa=[qString,aString];
	return qa;
}

function makeImplicit()
{
	var a1=rand(1,3);
	var b1=randnz(4);
	var c1=rand(1,3);
	var d1=randnz(4);
	if(d1*a1-b1*c1==0) (d1>0?d1++:d1--);
	var a2=randnz(3);
	var b2=randnz(4);
	var c2=rand(1,3);
	var d2=randnz(4);
	if(d2*a2-b2*c2==0) (d2>0?d2++:d2--);
	var t=randnz(3);
	while((c1*t+d1)==0||(c2*t+d2)==0) (t>0?t++:t--);
	var qString="\\mbox{If }y=\\frac{"+p_linear(a1, b1).write('t')+"}{"+p_linear(c1, d1).write('t')+"}\\mbox{ and }x=\\frac{"+p_linear(a2, b2).write('t')+"}{"+p_linear(c2, d2).write('t')+"},\\mbox{ find }\\frac{dy}{dx} \\mbox{ when }t="+t;
	a=new frac((a1*d1-b1*c1)*(c2*t+d2)*(c2*t+d2), (a2*d2-b2*c2)*(c1*t+d1)*(c1*t+d1));
	var aString=a.write();
	var qa=[qString,aString];
	return qa;
}

function makeChainRule()
{
	fns=new Array("\\ln(z)", "\\csc(z)", "\\sec(z)", "\\sin(z)", "\\tan(z)", "\\cos(z)");
	difs=new Array("\\frac{y}{z}", "-y\\csc(z)\\cot(z)", "y\\sec(z)\\tan(z)", "y\\cos(z)", "y\\sec^2(z)", "-y\\sin(z)");
	even=new Array(-1, 1, -1, 1, 1, -1);
	var which=rand(0, 5);
	a=new poly(rand(1, 3));
	a.setrand(8);
	b=new poly(0);
	a.diff(b);
	var qString="\\mbox{Differentiate }"+fns[which].replace(/z/g, a.write());
	if(difs[which].charAt(0)=='-')
	{
		difs[which]=difs[which].slice(1);
		b.xthru(-1);
	}
	if(a[a.rank]<0)
	{
		a.xthru(-1);
		b.xthru(even[which]);
	}
	var aString;
	if(which==0)
	{
		var c=gcd(a.gcd(), b.gcd());
		a.xthru(1.0/c);
		b.xthru(1.0/c);
	}
	if((b.terms()>1)&&which)
		aString='('+b.write()+')';
	else if(b.rank==0&&which)
		aString=ascoeff(b[0]);
	else
		aString=b.write();
	aString=difs[which].replace(/z/g, a.write()).replace(/y/g, aString);
	var qa=[qString,aString];
	return qa;
}

function makeProductRule()
{
	fns=new Array("\\ln(z)", "\\csc(z)", "\\sec(z)", "\\sin(z)", "\\tan(z)", "\\cos(z)");
	difs=new Array("\\frac{y}{z}", "-y\\csc(z)\\cot(z)", "y\\sec(z)\\tan(z)", "y\\cos(z)", "y\\sec^2(z)", "-y\\sin(z)");
	even=new Array(-1, 1, -1, 1, 1, -1);
	var which=rand(0, 5);
	a=new poly(rand(1, 3));
	a.setrand(8);
	b=new poly(0);
	a.diff(b);
	var qString="\\mbox{Differentiate }"
	if(a.terms()>1)
		qString+='('+a.write()+')'+fns[which].replace(/z/g, 'x');
	else
		qString+=a.write()+fns[which].replace(/z/g, 'x');
	var aString;
	if(b.terms()>1)
		aString='('+b.write()+')';
	else if(b[0]==1)
		aString='';
	else if(b[0]==-1)
		aString='-';
	else
		aString=b.write();
	if(difs[which].charAt(0)=='-')
	{
		difs[which]=difs[which].slice(1);
		a.xthru(-1);
	}
	if(a[a.rank]>0)
		aString+=fns[which].replace(/z/g, 'x')+' + ';
	else
	{
		aString+=fns[which].replace(/z/g, 'x')+' - ';
		a.xthru(-1);
	}
	if(which==0&&a[0]==0) // deal with eg. D(axlnx) = alnx + ax/x = alnx + a
	{
		for(var i=0;i<a.rank;i++)
			a[i]=a[i+1];
		a.rank--;
		aString+=a.write();
	}
	else if((a.terms()>1)&&which)
		aString+=difs[which].replace(/y/g, '('+a.write()+')').replace(/z/g, 'x');
	else if((a[0]==1)&&which)
		aString+=difs[which].replace(/y/g, '');
	else
		aString+=difs[which].replace(/y/g, a.write()).replace(/z/g, 'x');
	var qa=[qString,aString];
	return qa;
}

function makeQuotientRule()
{
	fns=new Array("\\sin(z)", "\\tan(z)", "\\cos(z)");
	difs=new Array("\\csc(z)\\cot(z)", "\\csc^2(z)", "\\sec(z)\\tan(z)");
	even=new Array(1, 1, -1);
	var which=rand(0, 2);
	var a=randnz(8);
	b=new poly(2);
	b.setrand(8);
	// D(a/f.b = (f.b*Da)+(a*D{f.b})/(f*f).b = a*b'*f'.b/(f*f).b
	var qString="\\mbox{Differentiate } \\frac{"+a+"}{"+fns[which].replace(/z/g, b.write())+"}";
	c=new poly(1);
	b.diff(c);
	c.xthru(a);
	if(b[b.rank]<0)
	{
		b.xthru(-1);
		c.xthru(even[which]);
	}
	var lead=c.write();
	if(c.terms()>1)
		lead='('+lead+')';
	else if(c.rank==0)
	{
		if(c[0]==1)
			lead="";
		else if(c[0]==-1)
			lead="-";
	}
	var bot=difs[which].replace(/z/g, b.write());
	var aString=lead+bot;
	var qa=[qString,aString];
	return qa;
}

function makeGP()
{
	if(rand())
	{
		var a=randnz(8);
		var b=rand(2, 9);
		if(rand()) b=-b;
		var c=1;
		if(rand())
		{
			c=rand(2, 5);
			if(c==b) c++;
			var d=gcd(b, c);
			b/=d;
			c/=d;
		}
		var n=rand(5, 10);
		var qString = "\\mbox{Evaluate } \\sum_{r=0}^{"+n+"} "+(a==1?"":a==-1?c==1&&b>0?"-\\left(":"-":a+"\\times")+(c==1?b<0?"\\left("+b+"\\right)":b:"\\left(\\frac{"+b+"}{"+c+"}\\right)")+"^{r}"+(a==-1&&c==1&&b>0?"\\right)":""); // don't you just love gratuitous use of the ternary operator?
		// Sum is a(1-r^n+1)/(1-r)
		var top=new frac(-Math.pow(b, n+1), Math.pow(c, n+1));
		top.add(1);
		top.prod(a);
		var bot=new frac(-b, c);
		bot.add(1);
		var ans=new frac(top.top*bot.bot, top.bot*bot.top);
		ans.reduce();
		var aString = ans.write();
	}
	else
	{
		var a=randnz(8);
		var b=rand(1, 6);
		var c=rand(b+1, 12);
		if(rand()) b=-b;
		var r=new frac(b, c);
		r.reduce();
		var qString = "\\mbox{Evaluate } \\sum_{r=0}^{\\infty} "+(a==1?"":a==-1?"-":a+"\\times")+"\\left("+r.write()+"\\right)^{r}";
		// Sum is a/(1-r)
		r.prod(-1);
		r.add(1);
		var ans=new frac(a*r.bot, r.top);
		var aString = ans.write();
	}
	var qa=[qString,aString];
	return qa;
}

function makeModulus()
{
	var parms=0;
	var fn=0;
	if(rand())
	{
		var a=randnz(4);
		var aa=Math.abs(a);
		var l=rand(-aa-6, -aa-2);
		var r=rand(aa+2, aa+6);
		qString="\\mbox{Sketch the graph of }|"+a+"-|x||\\mbox{ for }"+l+"\\leq{x}\\leq"+r+".";
		aString='%GRAPH%';
		fn=function drawIt(parms)
		{
			var d1 = [];
			var n=0;
			for(var i=parms[1];i<parms[2]; i+=0.5)
			{
				n++;
				d1.push([i, Math.abs(parms[0]-Math.abs(i))]);
				if(n>50)
					i=parms[2]; // prevent infiniloops
			}
			$.plot($("#graph"), [d1]);
		}
		parms=[a, l, r];
	}
	else
	{
		var a=distrandnz(2, 4);
		var s=[rand(), rand()];
		var xa=Math.max(Math.abs(a[0]), Math.abs(a[1]));
		var l=rand(-xa-6, -xa-2);
		var r=rand(xa+2, xa+6);
		qString="\\mbox{Sketch the graph of }("+a[0]+(s[0]?'+':'-')+"|x|)("+a[1]+(s[1]?'+':'-')+"|x|)\\mbox{ for }"+l+"\\leq{x}\\leq"+r+".";
		aString='%GRAPH%';
		fn=function drawIt(parms)
		{
			var a=parms[0];
			var s=parms[1];
			var l=parms[2];
			var r=parms[3];
			var d1 = [];
			var n=0;
			for(var i=l;i<r; i+=0.25)
			{
				n++;
				d1.push([i, (a[0]+(s[0]?Math.abs(i):-Math.abs(i)))*(a[1]+(s[1]?Math.abs(i):-Math.abs(i)))]);
				if(n>100)
					i=r; // prevent infiniloops
			}
			$.plot($("#graph"), [d1]);
		}
		parms=[a,s,l,r];
	}
	var qa=[qString,aString,fn,parms];
	return qa;
}

function makeTransformation()
{
	fnn=new Array("\\ln(z)", "\\csc(z)", "\\sec(z)", "\\sin(z)", "\\tan(z)", "\\cos(z)");
	fnf=new Array(Math.log, function(x) { return 1/Math.sin(x);}, function(x) {return 1/Math.cos(x);}, Math.sin, Math.tan, Math.cos);
	var which=rand(0, 5);
	var parms=0;
	var fn=0;
	var p=new poly(1);p.setrand(2);
	var q=new poly(1);q.setrand(3);
	q[1]=Math.abs(q[1]);
	if(rand()) p[1]=1;
	else if(rand()) q[1]=1;
	else if(rand()) p[0]=0;
	else q[0]=0;
	var l=which?rand(-5, 2):Math.max(Math.ceil((1-q[0])/q[1]), 0);
	var r=l+rand(4, 8);
	qString="\\mbox{Let }f(x)="+fnn[which].replace(/z/g, 'x')+"\\mbox{.  Sketch the graphs of }y=f(x)\\mbox{ and }y="+p.write("f("+q.write()+")")+"\\mbox{ for }"+l+((which==0&&l==0)?"<":"\\leq")+"{x}\\leq"+r+".";
	aString='%GRAPH%';
	fn=function drawIt(parms)
	{
		var p=parms[0];
		var q=parms[1];
		var f=parms[2];
		var l=parms[3];
		var r=parms[4];
		var d1 = [];
		var d2 = [];
		var n=0;
		for(var i=l;i<r; i+=0.01)
		{
			n++;
			var y1=f(i);
			if(Math.abs(y1)>12)
				y1=null;
			d1.push([i, y1]);
			var y2=p.compute(f(q.compute(i)));
			if(Math.abs(y2)>12)
				y2=null;
			d2.push([i, y2]);
			if(n>2500)
				i=r; // prevent infiniloops
		}
		$.plot($("#graph"), [d1, d2]);
	}
	parms=[p,q,fnf[which],l,r];
	var qa=[qString,aString,fn,parms];
	return qa;
}

function makeComposition()
{
	var p=new poly(rand(1, 2));p.setrand(2);
	if(p.rank==1&&p[0]==0&&p[1]==1) p[0]=randnz(2);
	var fnf=new Array(Math.sin, Math.tan, Math.cos, 0);
	var fnn=new Array("\\sin(z)", "\\tan(z)", "\\cos(z)", p.write('z'));
	var which=distrand(2, 0, 3);
	var parms=0;
	var fn=0;
	var l=rand(-4, 0);
	var r=rand(Math.max(l+5, 2), 8);
	qString="\\begin{array}{l}\\mbox{Let }f(x)="+fnn[which[0]].replace(/z/g, 'x')+"\\mbox{, }g(x)="+fnn[which[1]].replace(/z/g, 'x')+".\\\\\\mbox{Sketch the graphs of }y=f(x), y=g(x)\\mbox{ and }y=f(g(x))\\mbox{ (where they exist)}\\\\\\mbox{for }"+l+"\\leq{x}\\leq"+r+"\\mbox{ and }-12\\leq{y}\\leq12.\\end{array}";
	aString='%GRAPH%';
	fn=function drawIt(parms)
	{
		var f=parms[0];
		var g=parms[1];
		var p=parms[2];
		var l=parms[3];
		var r=parms[4];
		var d1 = [];
		var d2 = [];
		var d3 = [];
		var n=0;
		for(var i=l;i<r; i+=0.01)
		{
			n++;
			var y1=f?f(i):p.compute(i);
			if(Math.abs(y1)>12)
				y1=null;
			d1.push([i, y1]);
			var y2=g?g(i):p.compute(i);
			var y3=y2?f?f(y2):p.compute(y2):null;
			if(Math.abs(y3)>12)
				y3=null;
			if(Math.abs(y2)>12)
				y2=null;
			d2.push([i, y2]);
			d3.push([i, y3]);
			if(n>2500)
				i=r; // prevent infiniloops
		}
		$.plot($("#graph"), [d1, d2, d3]);
	}
	parms=[fnf[which[0]], fnf[which[1]], p, l, r];
	var qa=[qString,aString,fn,parms];
	return qa;
}

function makeParametric()
{
	var p=new poly(rand(1, 2));p.setrand(2);
	if(p.rank==1&&p[0]==0&&p[1]==1) p[0]=randnz(2);
	var fnf=new Array(Math.log, function(x) { return 1/Math.sin(x);}, function(x) {return 1/Math.cos(x);}, Math.sin, Math.tan, Math.cos, 0);
	var fnn=new Array("\\ln(z)", "\\csc(z)", "\\sec(z)", "\\sin(z)", "\\tan(z)", "\\cos(z)", p.write('z'));
	var which=distrand(2, 0, 6);
	var parms=0;
	var fn=0;
	qString="\\begin{array}{l}\\mbox{Sketch the curve in the xy plane given by }x="+fnn[which[0]].replace(/z/g, 't')+"\\mbox{, }y="+fnn[which[1]].replace(/z/g, 't')+".\\\\t\\mbox{ is a real parameter which ranges from } -\\infty \\mbox{ to } \\infty.\\end{array}";
	aString='%GRAPH%';
	fn=function drawIt(parms)
	{
		var f=parms[0];
		var g=parms[1];
		var p=parms[2];
		var d1 = [];
		for(var i=-10;i<=10; i+=0.01)
		{
			var x=f?f(i):p.compute(i);
			if(Math.abs(x)>12)
				x=null;
			var y=g?g(i):p.compute(i);
			if(Math.abs(y)>12)
				y=null;
			if(x&&y)
				d1.push([x, y]);
			else
				d1.push([null, null]);
		}
		$.plot($("#graph"), [d1]);
	}
	parms=[fnf[which[0]], fnf[which[1]], p];
	var qa=[qString,aString,fn,parms];
	return qa;
}

function makeIntegration()
{
	switch(rand(0, 1))
	{
		case 0:
			fns=new Array("\\ln(z)", "\\csc(z)", "\\sec(z)", "\\sin(z)", "\\tan(z)", "\\cos(z)");
			difs=new Array("\\frac{y}{z}", "-y\\csc(z)\\cot(z)", "y\\sec(z)\\tan(z)", "y\\cos(z)", "y\\sec^2(z)", "-y\\sin(z)");
			even=new Array(-1, 1, -1, 1, 1, -1);
			var which=rand(0, 5);
			a=new poly(rand(1, 3));
			a.setrand(8);
			a[a.rank]=Math.abs(a[a.rank]);
			if(which==0) a.xthru(1.0/a.gcd());
			var u=randnz(4);
			b=new poly(0);
			a.diff(b);
			var aString=p_linear(u, 0).write(fns[which].replace(/z/g, a.write()))+"+c";
			if(difs[which].charAt(0)=='-')
			{
				difs[which]=difs[which].slice(1);
				b.xthru(-1);
			}
			var qString;
			b.xthru(u);
			if((b.terms()>1)&&which)
				qString='('+b.write()+')';
			else if(b.rank==0&&which)
				qString=ascoeff(b[0]);
			else
				qString=b.write();
			qString="\\mbox{Find } \\int"+difs[which].replace(/z/g, a.write()).replace(/y/g, qString)+"\\,dx";
			var qa=[qString,aString];
			return qa;
		break;
		case 1:
			fns=new Array("\\ln(z)", "\\csc(z)", "\\sec(z)", "\\sin(z)", "\\tan(z)", "\\cos(z)");
			difs=new Array("\\frac{y}{z}", "-y\\csc(z)\\cot(z)", "y\\sec(z)\\tan(z)", "y\\cos(z)", "y\\sec^2(z)", "-y\\sin(z)");
			even=new Array(-1, 1, -1, 1, 1, -1);
			var which=rand(0, 5);
			a=new poly(rand(1, 3));
			a.setrand(8);
			b=new poly(0);
			a.diff(b);
			var aString=""
			if(a.terms()>1)
				aString+='('+a.write()+')'+fns[which].replace(/z/g, 'x');
			else
				aString+=a.write()+fns[which].replace(/z/g, 'x');
			aString+="+c";
			var qString="\\mbox{Find }\\int";
			if(b.terms()>1)
				qString+='('+b.write()+')';
			else if(b[0]==1)
				qString+='';
			else if(b[0]==-1)
				qString+='-';
			else
				qString+=b.write();
			if(difs[which].charAt(0)=='-')
			{
				difs[which]=difs[which].slice(1);
				a.xthru(-1);
			}
			if(a[a.rank]>0)
				qString+=fns[which].replace(/z/g, 'x')+' + ';
			else
			{
				qString+=fns[which].replace(/z/g, 'x')+' - ';
				a.xthru(-1);
			}
			if(which==0&&a[0]==0) // deal with eg. D(axlnx) = alnx + ax/x = alnx + a
			{
				for(var i=0;i<a.rank;i++)
					a[i]=a[i+1];
				a.rank--;
				qString+=a.write();
			}
			else if((a.terms()>1)&&which)
				qString+=difs[which].replace(/y/g, '('+a.write()+')').replace(/z/g, 'x');
			else if((a[0]==1)&&which)
				qString+=difs[which].replace(/y/g, '');
			else
				qString+=difs[which].replace(/y/g, a.write()).replace(/z/g, 'x');
			qString+="\\,dx";
			var qa=[qString,aString];
			return qa;
		break;
	}
}

function makeSepFirstODE()
{
	var n=rand(1,3);
	fns=new Array("\\csc(z)", "\\sec(z)", "\\sin(z)", "\\tan(z)", "\\cos(z)", n==1?"{z}":"{z}^"+n);
	recint=new Array("-\\cos(z)", "\\sin(z)", "-\\ln{\|\\csc(z)+\\cot(z)\|}", "\\ln\|\\sin(z)\|", "\\ln\|\\sec(z)+\\tan(z)\|", "{z}^{"+(-1-n)+"}");
	riinv=new Array("\\arccos\\left(-z\\right)", "\\arcsin\\left(z\\right)", 0, 0, 0, "{\\left(z\\right)}^{-\\frac{1}{"+(1+n)+"}}");
	eriinv=new Array(0, 0, 0, "\\arcsin\\left(z\\right)", 0, 0);
	var which=distrand(2, 0, 5);
	qString="\\begin{array}{l}\\mbox{Find the general solution of the following first-order ODE:}\\\\ "+fns[which[0]].replace(/z/g, 'x')+"\\frac{\\,dy}{\\,dx}+"+fns[which[1]].replace(/z/g, 'y')+"=0\\end{array}";
	// f(x)y' + g(y) = 0 => -1/g(y) dy = 1/f(x) dx
	if(recint[which[1]].charAt(0)=='-')
	{
		recint[which[1]]=recint[which[1]].slice(1);
	}
	else
	{
		recint[which[1]]='-'+recint[which[1]];
	}
	// TODO: improve this so that it gets y= in more cases (eg. 'ln y = f(x)+c' ==> 'y = Ae^{f(x)}')
	if((recint[which[0]].search(/ln/)==-1) || (recint[which[1]].search(/ln/)==-1))
	{
		if(riinv[which[1]]==0)
			aString=recint[which[1]].replace(/z/g, 'y')+"="+recint[which[0]].replace(/z/g, 'x')+"+c";
		else
			aString="y="+riinv[which[1]].replace(/z/g, recint[which[0]].replace(/z/g, 'x')+"+c");
	}
	else
	{
		if(eriinv[which[1]]==0)
			aString=recint[which[1]].replace(/z/g, 'y').replace(/-\\ln{/, "\\frac{1}{").replace(/\\ln/, "")+"="+recint[which[0]].replace(/z/g, 'x').replace(/-\\ln{/, "\\frac{A}{").replace(/\\ln/, "A");
		else
			aString="y="+eriinv[which[1]].replace(/z/g, recint[which[0]].replace(/z/g, 'x').replace(/-\\ln{/, "\\frac{A}{").replace(/\\ln/, "A"));
	}
	aString=aString.replace(/--/g, ""); // -(-x+c) = (x-c) = (x+k) and call k c
	var qa=[qString,aString];
	return qa;
}
