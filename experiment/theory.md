<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link rel="stylesheet" href="./css/imgstyles.css">
  <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
  <script id="MathJax-script" async
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>
</head>
<body>
					<h2>Continuous Time Fourier Transform (CTFT)</h2>
			<p>
				Fourier transform is a process to convert a spatial domain signal (i.e., time domain signal) into a frequency domain signal. Oppositely, the inverse Fourier transform is a process to convert the frequency domain signal to the primary time domain signal.
			</p>
			<h2>Notation of CTFT</h2>
			<p>Let <strong>x(t)</strong> be a continuous-time signal. Then the CTFT is defined as:</p>
			<p>
			\( X(j\omega) = \int_{-\infty}^{\infty} x(t) \cdot e^{-j\omega t} \, dt \)
			</p>
			<h3>Where:</h3>
			<ul>
			<li>\( \omega \) is the angular frequency in radians/second.</li>
			<li>\( X(j\omega) \) is the frequency-domain representation of \( x(t) \).</li>
			<li>The transform assumes signals are absolutely integrable over time.</li>
			</ul>
			<h3>Inverse CTFT:</h3>
			<p>To reconstruct <strong>x(t)</strong> from its CTFT:</p>
			<p>
			\( x(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} X(j\omega) \cdot e^{j\omega t} \, d\omega \)
			</p>
						<p>
				&#xa0;
			</p>
			<h2>Discrete Time Fourier Transform (DTFT)</h2>
			<p>The Discrete-Time Fourier Transform (DTFT) is used to analyze discrete-time signals, i.e., signals that are defined only at discrete intervals of time (like samples from an analog signal). These arise naturally in digital signal processing because all digital devices (computers, DSPs) process data in discrete form.</p>
			<h2>Notation of DTFT</h2>
			<p>Let <strong>x[n]</strong> be a discrete-time signal. Then the DTFT is defined as:</p>
			<p>
			\( X(e^{j\omega}) = \sum_{n=-\infty}^{\infty} x[n] \cdot e^{-j\omega n} \)
			</p>
			<h3>Where:</h3>
			<ul>
			<li>\( \omega \) is the angular frequency in radians/sample.</li>
			<li>\( e^{j\omega} \) represents the frequency-domain variable on the unit circle.</li>
			<li>\( X(e^{j\omega}) \) is periodic with period \( 2\pi \).</li>
			</ul>
			<h3>Inverse DTFT:</h3>
			<p>To reconstruct <strong>x[n]</strong> from its DTFT:</p>
			<p>
			\( x[n] = \frac{1}{2\pi} \int_{-\pi}^{\pi} X(e^{j\omega}) \cdot e^{j\omega n} d\omega \)
			</p>
			<h3>
		     Discrete Fourier Transform (DFT)
			</h3>
			<p>
				For digital systems, the Fourier transform is realized by
			</p>
			<p>
				For complex numbers x<sub>0</sub>, x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub>, … , x<sub>n-1</sub>
			</p>
			<p>
				X[k] = <img src="1738659393_fourier-transform/1738659393_fourier-transform-5.png" width="79" height="25" alt="" /> <em>W</em><em><sub>N</sub></em><em><sup>kn</sup></em><sup> </sup>,&#xa0; where k=1,2,3,..,N-1
			</p>
			<p>
				Where <em>W</em><em><sub>N</sub></em><em><sup> </sup></em>&#xa0;is the n<sup>th</sup> root of unity given by
			</p>
			<p>
				<em>W</em><em><sub>N </sub></em>= exp(-j(2<img src="1738659393_fourier-transform/1738659393_fourier-transform-6.png" width="11" height="31" alt="" /> )
			</p>
			<p>
				&#xa0;
			</p>
			<p>
				**DFT Algorithms are at the end of this article
			</p>
			<p>
				&#xa0;
			</p>
			<h3>
		     Fast Fourier Transform (FFT)
			</h3>
			<p>
				The basic idea of a fast Fourier transform is to break up a transform of length N into two transforms of length N/2. 
			</p>
			<p>
				For complex numbers x[n] where, n = 1, 2, 3, …, n-1
			</p>
			<p>
				X[k] = <img src="1738659393_fourier-transform/1738659393_fourier-transform-5.png" width="79" height="25" alt="" /><em> W</em><em><sub>N</sub></em><em><sup>kn</sup></em><em> </em>= <img src="1738659393_fourier-transform/1738659393_fourier-transform-7.png" width="96" height="37" alt="" />e<sup>-j2πk(2r)/N</sup> + <img src="1738659393_fourier-transform/1738659393_fourier-transform-8.png" width="129" height="37" alt="" />e<sup>-j2πk(2r+1)/N</sup>
			</p>
			<p>
				<em>**In the above transform of length N is broken into two transforms of length N/2 and on the other hand, they pick up even and odd samples of x[n] separately</em>
			</p>
			<p>
				= <img src="1738659393_fourier-transform/1738659393_fourier-transform-7.png" width="96" height="37" alt="" />e<sup>-j2πk(2r)/N</sup> + e<sup>-j2πk/N</sup> <img src="1738659393_fourier-transform/1738659393_fourier-transform-8.png" width="129" height="37" alt="" />e<sup>-j2πk(2r)/N</sup>
			</p>
			<p>
				= <img src="1738659393_fourier-transform/1738659393_fourier-transform-7.png" width="96" height="37" alt="" />e<sup>-j2πkr/(N/2)</sup> + e<sup>-j2πk/N</sup> <img src="1738659393_fourier-transform/1738659393_fourier-transform-8.png" width="129" height="37" alt="" />e<sup>-j2πkr/(N/2)</sup>
			</p>
						<p>
				&#xa0;
			</p>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-9.png" width="630" height="359" alt="" />
			</p>
			<p>
				In the above diagram {<strong>X[0], X[1], X[2], X[3], X[4], X[5], X[6], X[7]</strong>} is the Fourier transform of {x[0], x[1], x[2], x[3], x[4], x[5], x[6], x[7]} 
			</p>
			<p>
				&#xa0;
			</p>
			<p>
				**FFT algorithms are at the end of this article
			</p>
			<p>
				&#xa0;
			</p>
					<h3>Advantages of FFT over DFT</h3>
			<p>
				To compute the DFT of an N-point sequence it take O(N<sup>2</sup>) multiplies and adds. The FFT algorithm computes the DFT using O(N log N) multiplies and adds. 
			</p>
			<p>
				The fast Fourier transform (FFT) is a discrete Fourier transform algorithm which reduces the number of computations needed for N points from 2N<sup>2</sup> to 2Nlog<sub>2</sub>N.
			</p>
			<p>
				&#xa0;
			</p>
			<br/>
		    <h2>Properties of Fourier Transform</h2>
				<li>
					<h3>Linearity</h3>
				</li>
				<p>The Fourier Transform satisfies the property of linearity (superposition).</p>
				<p>Consider two signals \( x_1(t) \) and \( x_2(t) \) with Fourier Transforms:</p>
				<p>
				\( \mathcal{F}\{x_1(t)\} = X_1(j\omega), \quad \mathcal{F}\{x_2(t)\} = X_2(j\omega) \)
				</p>
				<p>Then for any constants \( a_1 \) and \( a_2 \), we have:</p>
				<p>
				\( \mathcal{F}\{a_1 x_1(t) + a_2 x_2(t)\} = a_1 X_1(j\omega) + a_2 X_2(j\omega) \)
				</p>
				<li>
					<h3>Scaling</h3>
				</li>
<p>If \( \mathcal{F}\{x(t)\} = X(j\omega) \), and \( a \) is a real constant, then:</p>

<p>
  \( \mathcal{F}\{x(at)\} = \frac{1}{|a|} X\left(\frac{j\omega}{a}\right) \)
</p>
				<li>
					<h3>Symmetry</h3>
				</li>
<p>If \( x(t) \) is real and even, then the Fourier Transform satisfies:</p>

<p>
  \( X(j\omega) = X^*(-j\omega) \)
</p>

<p>If \( x(t) \) is real and odd, then:</p>

<p>
  \( X(j\omega) = -X^*(-j\omega) \)
</p>
				<li>
					<h3>Convolution</h3>
				</li>
<p>
  Fourier Transform converts the convolution of two signals in time domain into the multiplication of their transforms in frequency domain.
</p>

  <li>
    <h4>Time Domain Convolution</h4>
  </li>

<p>
  If \( F(x_1(t)) = X_1(\omega) \) and \( F(x_2(t)) = X_2(\omega) \), then:
</p>
<p>
  \[
  F(x_1(t) * x_2(t)) = X_1(\omega) \cdot X_2(\omega)
  \quad \text{(‘*’ denotes convolution)}
  \]
</p>

  <li>
    <h4>Frequency Domain Convolution</h4>
  </li>
<p>
  If \( F(x_1(t)) = X_1(\omega) \), \( F(x_2(t)) = X_2(\omega) \), then:
</p>
<p>
  \[
  F(x_1(t) \cdot x_2(t)) = \frac{1}{2\pi} X_1(\omega) * X_2(\omega)
  \quad \text{(‘*’ denotes convolution)}
  \]
</p>
				<li>
					<h3>Shifting Property</h3>
				</li>
<p>
  \[
  \mathcal{F}\{x(t - t_0)\} = e^{-j\omega t_0} X(\omega)
  \]
</p>
<p>
  As a consequence, time shifting affects only the phase, leaving the magnitude spectrum \( |X(\omega)|^2 \) unchanged.
</p>
				<li>
					<h3>Duality</h3>
				</li>
<p>
  Duality states that if \( x(t) \leftrightarrow X(\omega) \), then the roles of time and frequency can be interchanged.
</p>
<p>
  \[
  \mathcal{F}\{X(t)\} = 2\pi x(-\omega)
  \]
</p>
<li>
  <h3>Differentiation</h3>
</li>
<p>
  The Fourier Transform of the derivative of a signal corresponds to multiplication by \( j\omega \) in the frequency domain:
</p>
<p>
  \( \mathcal{F} \left\{ \frac{d}{dt}x(t) \right\} = j\omega X(\omega) \)
</p>
<li>
  <h3>Integration</h3>
</li>
<p>
  The Fourier Transform of the integral of a signal corresponds to division by \( j\omega \):
</p>
<p>
  \( \mathcal{F} \left\{ \int_{-\infty}^{t} x(\tau) \, d\tau \right\} = \frac{X(\omega)}{j\omega} \)
</p>
<p>
  If \( x(t) \) is not an energy signal, the Fourier Transform of its integral includes a Dirac delta term:
</p>
<p>
  \( \mathcal{F} \left\{ \int_{-\infty}^{t} x(\tau) \, d\tau \right\} = \frac{X(\omega)}{j\omega} + \pi X(0) \delta(\omega) \)
</p>
<li>
  <h3>Modulation Property</h3>
</li>
<p>
  The Fourier Transform of a signal multiplied by a cosine is:
</p>
<p>
  \( \mathcal{F} \{ x(t) \cos(at) \} = \frac{1}{2} \left[ X(\omega + a) + X(\omega - a) \right] \)
</p>
<p>
  And the Fourier Transform of a signal multiplied by a sine is:
</p>
<p>
  \( \mathcal{F} \{ x(t) \sin(at) \} = \frac{1}{2j} \left[ X(\omega + a) - X(\omega - a) \right] \)
</p>

<li>
  <h3>Complex Conjugate Symmetry</h3>
</li>
<p>
  If the Fourier Transform of \( f(x) \) is \( F(k) \), then:
</p>
<p>
  \( f^*(x) \longleftrightarrow F^*(-k) \)
</p>
<p>
  As a consequence, the Fourier Transform of a real function satisfies the conjugate symmetry property:
</p>
<p>
  \( F(k) = F^*(-k) \)
</p>
<p>
  This implies:
</p>
<p>
  \( |F(k)|^2 = |F(-k)|^2 \)
</p>

<li>
  <h3>Parseval’s Theorem</h3>
</li>
<p>
  The total energy of a signal in the time domain equals the total energy in the frequency domain:
</p>
<p>
  \( \int_{-\infty}^{\infty} |x(t)|^2 \, dt = \frac{1}{2\pi} \int_{-\infty}^{\infty} |X(\omega)|^2 \, d\omega \)
</p>
<li>
  <h3>Time Reversal</h3>
</li>
<p>
  \(
    \mathcal{F}\{x(-t)\} = X(-\omega)
  \)
</p>
		     <h2>Fourier Transform of some common signals</h2>
						<li>
	                     <h3>Fourier Transform of a delta function</h3>
						</li>
					</ol>
				</li>
			</ol>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-20.png" width="490" height="160" alt="" />
			</p>
			<p>
				If x(t) = 𝛅(t), then Fourier transform,
			</p>
			<p>
				X(ω) = <img src="1738659393_fourier-transform/1738659393_fourier-transform-21.png" width="39" height="30" alt="" /><em>(t)e</em><em><sup>-j</sup></em><sup>ωt</sup><em> dt</em>
			</p>
			<p>
				<em>= </em><img src="1738659393_fourier-transform/1738659393_fourier-transform-22.png" width="43" height="30" alt="" /><em>(t)e</em><em><sup>-j</sup></em><sup>ωt</sup><em> dt</em>
			</p>
			<p>
				<em>= </em><img src="1738659393_fourier-transform/1738659393_fourier-transform-23.png" width="47" height="30" alt="" /><em>e</em><em><sup>-j</sup></em><sup>ω0</sup><em> dt</em>
			</p>
			<p>
				<em>= 1</em>
			</p>
			<p>
				Thus Fourier transform of a delta/impulse is a constant equal to 1, independent of frequency. Remember that derivation is used the shifting property of the impulse to eliminate the integral.
			</p>
			<p>
				&#xa0;
			</p>
						<p>
				<img src="NewImages/Delta.png" width="398" height="149" alt="" />
			</p>
						<p>
				&#xa0;
			</p>
				<li>
					<h3>Fourier transform of a unit step function</h3>
				</li>
			<p>
				<strong>&#xa0;</strong>
			</p>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-24.png" width="398" height="149" alt="" />
			</p>
			<p>
				γ (t) = 0 for t&lt;0
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = 1 for t ≥1
			</p>
			<p>
				We know that a unit-step function is an integration of a delta function. So for a unit step function,
			</p>
			<p>
				γ (t) = <em>&#xa0;</em><img src="1738659393_fourier-transform/1738659393_fourier-transform-22.png" width="43" height="30" alt="" /><em>(t) dt</em>
			</p>
			<p>
				So, X(ω) = <img src="1738659393_fourier-transform/1738659393_fourier-transform-25.png" width="15" height="36" alt="" /> F(<img src="1738659393_fourier-transform/1738659393_fourier-transform-26.png" width="33" height="24" alt="" />) + <img src="1738659393_fourier-transform/1738659393_fourier-transform-15.png" width="10" height="18" alt="" />F(<img src="1738659393_fourier-transform/1738659393_fourier-transform-27.png" width="37" height="24" alt="" />)<img src="1738659393_fourier-transform/1738659393_fourier-transform-28.png" width="41" height="24" alt="" />&#xa0; 
			</p>
			<p>
				<em>[See the property of integration above]</em>
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = <img src="1738659393_fourier-transform/1738659393_fourier-transform-25.png" width="15" height="36" alt="" /> + <img src="1738659393_fourier-transform/1738659393_fourier-transform-29.png" width="50" height="21" alt="" />&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; [as F(<img src="1738659393_fourier-transform/1738659393_fourier-transform-26.png" width="33" height="24" alt="" />)= F(<img src="1738659393_fourier-transform/1738659393_fourier-transform-27.png" width="37" height="24" alt="" />)=1]
			</p>
			<p>
				When a function (i.e., x(t)) is not an energy function and hence the Fourier transform of <img src="1738659393_fourier-transform/1738659393_fourier-transform-14.png" width="49" height="30" alt="" /><em>(t) dt</em>] includes an impulse function. 
			</p>
			<p>
				&#xa0;
			</p>
									<p>
				<img src="NewImages/unitStep.png" width="398" height="149" alt="" />
			</p>
						<p>
				&#xa0;
			</p>
				<li>
					<h3> Fourier Transform of a unit pulse function</h3>
				</li>
			<p>
				A pulse function can be represented as,
			</p>
			<p>
				x(t)=Π(t) = γ (t + ½) - γ(t - ½)
			</p>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-30.png" width="432" height="279" alt="" />
			</p>
			<p>
				For a function rect(t) = Π(t) = 1 for |t| ≤ ½
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = 0 otherwise
			</p>
			<p>
				Given that 
			</p>
			<p>
				x(t) = Π(t)
			</p>
			<p>
				Hence from the definition of the Fourier transform we have
			</p>
			<p>
				F (Π(t)) = X(<img src="1738659393_fourier-transform/1738659393_fourier-transform-31.png" width="15" height="24" alt="" />) = <img src="1738659393_fourier-transform/1738659393_fourier-transform-32.png" width="64" height="30" alt="" />e <sup>-jω</sup><sup>t</sup> dt
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; =&#xa0; <img src="1738659393_fourier-transform/1738659393_fourier-transform-33.png" width="58" height="36" alt="" />e <sup>-jω</sup><sup>t</sup> dt&#xa0;&#xa0;&#xa0;&#xa0; [as Π(t) = 1 for |t| ≤ ½]
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; =&#xa0; [(e <sup>–jω</sup><sup>t</sup>)/-jω]<sub>-1/2</sub><sup>1/2</sup>
			</p>
			<p>
				<sup>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </sup>&#xa0;= [e <sup>–jω</sup><sup>/2</sup> - e <sup>jω</sup><sup>/2</sup>] / -jω
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = [e <sup>jω</sup><sup>/2</sup> - e <sup>-jω</sup><sup>/2</sup>] / jω
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = 2/ω . {[e <sup>jω</sup><sup>/2</sup> - e <sup>-jω</sup><sup>/2</sup>] / 2j}
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = 2/ω . sin(ω/2)
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = {sin(ω/2) / (ω/2)}
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = {sin(<img src="1738659393_fourier-transform/1738659393_fourier-transform-34.png" width="19" height="24" alt="" />(ω/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />)) / (<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />(ω/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />))}
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = sinc(ω/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />)
			</p>
			<p>
				&#xa0;
			</p>
			<p>
				For the above case, the rectangular function has a pulse width value of 1 over the interval of [-½, ½]; 0 otherwise.
			</p>
			<p>
				Now we’ll discuss a rectangular pulse that has a width of T
			</p>
			<p>
				Then,&#xa0;&#xa0;&#xa0; rect(t/T) = Π(t/T) = 1 for |t| ≤ T/2
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = 0 otherwise
			</p>
			<p>
				Given that 
			</p>
			<p>
				x(t/T) = Π(t/T)
			</p>
			<p>
				Hence from the definition of the Fourier transform we have
			</p>
			<p>
				F (Π(t/T)) = <img src="1738659393_fourier-transform/1738659393_fourier-transform-35.png" width="85" height="30" alt="" />e <sup>-jω</sup><sup>t</sup> dt
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; =&#xa0; <img src="1738659393_fourier-transform/1738659393_fourier-transform-36.png" width="58" height="36" alt="" />e <sup>-jω</sup><sup>t</sup> dt&#xa0;&#xa0;&#xa0;&#xa0; [as Π(t/T) = 1 for |t| ≤ T/2]
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; =&#xa0; [(e <sup>–jω</sup><sup>t</sup>)/-jω]<sub>-T/2</sub><sup>T/2</sup>
			</p>
			<p>
				<sup>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </sup>&#xa0;= [e <sup>–jωT</sup><sup>/2</sup> - e <sup>jωT</sup><sup>/2</sup>] / -jω
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = [e <sup>jωT</sup><sup>/2</sup> - e <sup>-jωT</sup><sup>/2</sup>] / jω
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = 2/ω . {[e <sup>jωT</sup><sup>/2</sup> - e <sup>-jωT</sup><sup>/2</sup>] / 2j}
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = 2/ω . sin(ω(T/2))
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = {sin(ω(T/2)) / (ω/2)}
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = {sin(<img src="1738659393_fourier-transform/1738659393_fourier-transform-37.png" width="19" height="24" alt="" />ωT/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />)) / (<img src="1738659393_fourier-transform/1738659393_fourier-transform-37.png" width="19" height="24" alt="" />ω/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />))}
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = {sin(<img src="1738659393_fourier-transform/1738659393_fourier-transform-37.png" width="19" height="24" alt="" />ωT/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />)) / (<img src="1738659393_fourier-transform/1738659393_fourier-transform-37.png" width="19" height="24" alt="" />ωT/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />))}.T
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = T. sinc(ωT/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />)
			</p>
			<p>
				&#xa0;
			</p>
			<p>
				&#xa0;
			</p>
												<p>
				<img src="NewImages/Rectangular.png" width="398" height="149" alt="" />
			</p>
						<p>
				&#xa0;
			</p>
				<li>
					<h3> Fourier Transform of a unit triangle pulse</h3>
				</li>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-38.png" width="285" height="201" alt="" />
			</p>
			<p>
				A unit triangle pulse is simply the convolution of a unit pulse function with itself.
			</p>
			<p>
				Here, Λ(t) = Π(t) * Π(t)&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; 
			</p>
			<p>
				<em>[Π(t) is a unit pulse function &amp; ‘*’ denotes convolution]</em>
			</p>
			<p>
				So, Λ(ω) = sinc(ω/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />) . sinc(ω/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-39.png" width="19" height="24" alt="" /> = sinc<sup>2</sup>(ω/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-39.png" width="19" height="24" alt="" />
			</p>
			<p>
				&#xa0;
			</p>
															<p>
				<img src="NewImages/Triangular.png" width="398" height="149" alt="" />
			</p>
						<p>
				&#xa0;
			</p>
				<li>
					<h3> Fourier Transform of a Sawtooth function</h3>
				</li>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-40.png" width="311" height="221" alt="" />
			</p>
			<p>
				s(t) = 0, for t &lt; 0 and t &gt; 1
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = 1, for 0 ≤ t ≤ 1
			</p>
			<p>
				We can represent sawtooth as the integral of shifted unit pulse function (to give the ramp) and a negative impulse (delayed by one second) to give the discontinuity at the end of the ramp
			</p>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-41.png" width="364" height="212" alt="" />
			</p>
			<p>
				&#xa0;
			</p>
			<p>
				s(t) = <img src="1738659393_fourier-transform/1738659393_fourier-transform-42.png" width="101" height="33" alt="" />dt - <img src="1738659393_fourier-transform/1738659393_fourier-transform-43.png" width="99" height="32" alt="" />dt =<img src="1738659393_fourier-transform/1738659393_fourier-transform-44.png" width="84" height="32" alt="" />
			</p>
			<p>
				y(t) = <img src="1738659393_fourier-transform/1738659393_fourier-transform-45.png" width="69" height="33" alt="" /> - <img src="1738659393_fourier-transform/1738659393_fourier-transform-46.png" width="67" height="24" alt="" />
			</p>
			<p>
				Now, we’ve to find the Fourier transform of y(t),
			</p>
			<p>
				Y(ω) = sinc(ω/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />)e<sup>-j</sup><sup>ω/2 </sup>- e<sup>-j</sup><sup>ω</sup>
			</p>
			<p>
				We can now apply integral property with Y(0) = 0, to find S(ω)
			</p>
			<p>
				S(ω) = F(<img src="1738659393_fourier-transform/1738659393_fourier-transform-44.png" width="84" height="32" alt="" />) = Y(ω)/jω - <img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />Y(0)<img src="1738659393_fourier-transform/1738659393_fourier-transform-47.png" width="11" height="24" alt="" />(0) = Y(ω)/jω
			</p>
			<p>
				= {(sinc(ω/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />)e<sup>-j</sup><sup>ω/2 </sup>- e<sup>-j</sup><sup>ω</sup>) / jω}
			</p>
			<p>
				= {((sin(π . ω/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />) / (π . ω/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />))e<sup>-j</sup><sup>ω/2 </sup>- e<sup>-j</sup><sup>ω</sup>) / jω}
			</p>
			<p>
				=&#xa0; (((sin(π . ω/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />) / (π . ω/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />))e<sup>-j</sup><sup>ω/2</sup>) / jω) – (e<sup>-j</sup><sup>ω</sup> / jω)
			</p>
			<p>
				= (2(sin(ω/2)e<sup>-j</sup><sup>ω/2</sup>) / jω<sup>2</sup>) – (je<sup>-j</sup><sup>ω</sup> / j<sup>2</sup>ω)
			</p>
			<p>
				= (2((e<sup>j</sup><sup>ω/2</sup> - e<sup>-j</sup><sup>ω/2</sup>) / 2j)e<sup>-j</sup><sup>ω/2</sup>) / jω<sup>2</sup>) + (je<sup>-j</sup><sup>ω</sup> / ω)&#xa0;&#xa0;&#xa0;&#xa0; [as j<sup>2 </sup>= -1]
			</p>
			<p>
				= (((e<sup>j</sup><sup>ω/2</sup> - e<sup>-j</sup><sup>ω/2</sup>)e<sup>-j</sup><sup>ω/2</sup>) / j<sup>2</sup>ω<sup>2</sup>) + (je<sup>-j</sup><sup>ω</sup> / ω)
			</p>
			<p>
				= (((e<sup>-j</sup><sup>ω/2 </sup>- e<sup>j</sup><sup>ω/2</sup>)e<sup>-j</sup><sup>ω/2</sup>) / ω<sup>2</sup>) + (je<sup>-j</sup><sup>ω</sup> / ω)
			</p>
			<p>
				= (((e<sup>-j</sup><sup>ω/2 </sup>- e<sup>j</sup><sup>ω/2</sup>)e<sup>-j</sup><sup>ω/2</sup>) / ω<sup>2</sup>) + (je<sup>-j</sup><sup>ω</sup> / ω)
			</p>
			<p>
				= ((((e<sup>-j</sup><sup>ω/2 </sup>- e<sup>j</sup><sup>ω/2</sup>)e<sup>-j</sup><sup>ω/2</sup>) + jωe<sup>-j</sup><sup>ω</sup>) / ω<sup>2</sup>)
			</p>
			<p>
				= ((e<sup>-j</sup><sup>ω </sup>- 1 + jωe<sup>-j</sup><sup>ω</sup>) / ω<sup>2</sup>)
			</p>
			<p>
				= ((e<sup>-j</sup><sup>ω</sup>(1+jω)<sup> </sup>- 1) / ω<sup>2</sup>)
			</p>
			<p>
				&#xa0;
			</p>
			<p>
				<strong>&#xa0;</strong>
			</p>
				<li>
					<h2> Algorithms</h2>
				</li>
			<h3>For DFT &amp; FFT</h3>
			<p>
				Look at the aforementioned formula for DFT. The term <strong><em>W</em></strong><em><sup>k</sup></em><strong><em><sub>N</sub></em></strong><em><sub>&#xa0; </sub></em><em>(</em>= exp(-j(2<img src="1738659393_fourier-transform/1738659393_fourier-transform-6.png" width="11" height="31" alt="" /> .k) ) can be represented as follows
			</p>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-48.png" width="545" height="149" alt="" />
			</p>
			<p>
				&#xa0;
			</p>
			<p>
				In the above figure the values for N = 2, 4, and 8 are shown in the complex plain. Where ‘N’ denotes N point DFT.
			</p>
			<p>
				&#xa0;
			</p>
			<p>
				For example,
			</p>
<h3>For a 2 point DFT</h3>
			<p>
				<strong>W</strong><strong><sub>2</sub></strong><strong> = e</strong><strong><sup>-2jπ/N</sup></strong><strong> = e</strong><strong><sup>-2jπ/2</sup></strong><strong> = e</strong><strong><sup>-jπ </sup></strong><strong>= -1</strong>
			</p>
			<p>
				Now, discrete Fourier transform for complex numbers a<sub>1</sub> and a<sub>2</sub> is
			</p>
			<p>
				<strong>A</strong><strong><sub>K</sub></strong><sub> </sub>= <img src="1738659393_fourier-transform/1738659393_fourier-transform-49.png" width="54" height="24" alt="" /><sub>n</sub> <em>W</em><em><sub>2</sub></em><em><sup>kn</sup></em>
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = <img src="1738659393_fourier-transform/1738659393_fourier-transform-49.png" width="54" height="24" alt="" /><sub>n</sub> <em>(-1)</em><em><sup>kn</sup></em>
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = a<sub>0</sub> <em>(-1)</em><em><sup>k</sup></em><em><sup>&#xa0; </sup></em><em><sup>.0</sup></em><em><sup>&#xa0; </sup></em><em>+ </em>a<sub>1</sub> <em>(-1)</em><em><sup>k</sup></em><em><sup>&#xa0; </sup></em><em><sup>.1</sup></em>
			</p>
			<p>
				As <strong>K = </strong>0 and 1 (for 2 point DFT)
			</p>
			<p>
				So, <strong>A</strong><strong><sub>0 </sub></strong>= a<sub>0</sub><em><sup>&#xa0; </sup></em><em>+ </em>a<sub>1</sub>
			</p>
			<p>
				And <strong>A</strong><strong><sub>1 </sub></strong><strong>= </strong>a<sub>0</sub><em><sup>&#xa0; </sup></em><em>-</em><em>&#xa0; </em>a<sub>1</sub>
			</p>
			<p>
				&#xa0;
			</p>
			<h3>Similarly for a 4-point DFT</h3>
			<p>
				<strong>W</strong><strong><sub>4</sub></strong><strong> = e</strong><strong><sup>-2jπ/4</sup></strong><strong> = e</strong><strong><sup>-2jπ/4</sup></strong><strong> = e</strong><strong><sup>-jπ/2 </sup></strong><strong>= -j</strong>
			</p>
			<p>
				Now, discrete Fourier transform for complex numbers a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>, and a<sub>4</sub> is
			</p>
			<p>
				<strong>A</strong><strong><sub>K</sub></strong><sub> </sub>= <img src="1738659393_fourier-transform/1738659393_fourier-transform-50.png" width="54" height="25" alt="" /><sub>n</sub> <em>W</em><em><sub>4</sub></em><em><sup>kn</sup></em>
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0; = <img src="1738659393_fourier-transform/1738659393_fourier-transform-50.png" width="54" height="25" alt="" /><sub>n</sub> <em>(-j)</em><em><sup>kn</sup></em>
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0; = a<sub>0</sub> <em>(-j)</em><em><sup>k</sup></em><em><sup>&#xa0; </sup></em><em><sup>.0</sup></em><em><sup>&#xa0; </sup></em><em>+ </em>a<sub>1</sub> <em>(-j)</em><em><sup>k</sup></em><em><sup>&#xa0; </sup></em><em><sup>.1</sup></em><em> + </em>a<sub>2</sub> <em>(-j)</em><em><sup>k</sup></em><em><sup>&#xa0; </sup></em><em><sup>.2</sup></em><em> + </em>a<sub>3</sub> <em>(-j)</em><em><sup>k</sup></em><em><sup>&#xa0; </sup></em><em><sup>.3</sup></em>
			</p>
			<p>
				So, <strong>A</strong><strong><sub>0 </sub></strong>= a<sub>0</sub><em><sup>&#xa0; </sup></em><em>+ </em>a<sub>1 </sub>+ a<sub>2</sub><em><sup>&#xa0; </sup></em><em>+ </em>a<sub>3</sub>
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; <strong>A</strong><strong><sub>1 </sub></strong><strong>= </strong>a<sub>0</sub><em><sup>&#xa0; </sup></em><em>- j</em>a<sub>1 </sub>- a<sub>2</sub><em><sup>&#xa0; </sup></em><em>+ j</em>a<sub>3</sub>
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; <strong>A</strong><strong><sub>2 </sub></strong><strong>= </strong>a<sub>0</sub><em><sup>&#xa0; </sup></em><em>- </em>a<sub>1 </sub>+ a<sub>2</sub><em><sup>&#xa0; </sup></em><em>- </em>a<sub>3</sub>
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; <strong>A</strong><strong><sub>3 </sub></strong><strong>= </strong>a<sub>0</sub><em><sup>&#xa0; </sup></em><em>+ j</em>a<sub>1 </sub>- a<sub>2</sub><em><sup>&#xa0; </sup></em><em>- j</em>a<sub>3</sub>
			</p>
			<p>
				&#xa0;
			</p>
			<p>
				To compute <strong>A</strong> quickly, we can pre-compute common sub-expressions:
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; <strong>A</strong><strong><sub>0 </sub></strong>= (a<sub>0</sub><em><sup> </sup></em><em>+ </em>a<sub>2</sub>)<sub> </sub>+ (a<sub>1</sub><em><sup>&#xa0; </sup></em><em>+ </em>a<sub>3</sub>)
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; <strong>A</strong><strong><sub>1 </sub></strong><strong>=</strong><strong>&#xa0; </strong><strong>(</strong>a<sub>0</sub><em><sup> </sup></em>- a<sub>2</sub>)<sub> </sub><em>– j(</em>a<sub>1</sub><em><sup>&#xa0; </sup></em><em>- </em>a<sub>3</sub>)
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; <strong>A</strong><strong><sub>2 </sub></strong><strong>= (</strong>a<sub>0</sub><em><sup>&#xa0; </sup></em><em>+ </em>a<sub>2</sub>)<sub> </sub>- (a<sub>1</sub><em><sup>&#xa0; </sup></em><em>+ </em>a<sub>3</sub>)
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; <strong>A</strong><strong><sub>3 </sub></strong><strong>= (</strong>a<sub>0</sub><em><sup>&#xa0; </sup></em>- a<sub>2</sub>)<em><sup>&#xa0; </sup></em><em>+ j(</em>a<sub>1 </sub>- a<sub>3</sub>)
			</p>
			<p>
				&#xa0;
			</p>
			<p>
				Then we can diagram the 4-point like so,
			</p>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-51.png" width="406" height="226" alt="" />
			</p>
			<p>
				Fig: Three stages in the computation of an N=8-point DFT
			</p>
			<p>
				&#xa0;
			</p>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-52.png" width="520" height="240" alt="" />
			</p>
			<p>
				Fig: Three stages in the computation of an N=8-point DFT
			</p>
			<p>
				&#xa0;
			</p>
		<h3>Matrix Relations in DFT</h3>
			<p>
				The DFT samples defined by
			</p>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-53.png" width="231" height="49" alt="" />
			</p>
			<p>
				<strong>&#xa0;</strong>
			</p>
			<p>
				<em>W</em><em><sub>N</sub></em><em><sup>kn </sup></em>&#xa0;can be expanded as&#xa0; NXN <strong>DFT matrix</strong>
			</p>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-54.png" width="288" height="125" alt="" />
			</p>
			<p>
				In the matrix the elements in first row and first column all are <em>W</em><em><sub>N</sub></em><em><sup>.k.0</sup></em><em> or W</em><em><sub>N</sub></em><em><sup>.0</sup></em><em>=1. </em>In the third row powers are multiplied by 2 and in the fourth row powers are multiplied by 3 and so on.
			</p>
			<p>
				So,
			</p>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-55.png" width="500" height="145" alt="" />
			</p>
			<p>
				&#xa0;
			</p>
			<p>
				Oppositely, to find <strong>inverse DFT</strong> we replace the ‘j’ with ‘-j’ in the matrix or we take complex conjugates of the matrix elements.
			</p>
			<p>
				So, 
			</p>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-56.png" width="602" height="184" alt="" />
			</p>
			<p>
				The effective determinant of above is 1/4
			</p>
			<p>
				<strong>&#xa0;</strong>
			</p>
<h3>For a 8-point FFT</h3>
			<p>
				The FFT is a fast algorithm for computing the DFT. If we take the 2-point DFT and 4-point DFT and generalize them to 8-point, 16-point, ..., 2<sup>r</sup>-point, we get the FFT algorithm.
			</p>
			<p>
				&#xa0;
			</p>
<h4>N=8-point radix-4 DIT-FFT</h4>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-57.png" width="521" height="313" alt="" />
			</p>
			<p>
				Where, -W<sup>4 </sup>= W<sup>0</sup>=1; -W<sup>5</sup>= W<sup>1</sup><sup>&#xa0; </sup>= a&#xa0; = (1-j)/2;&#xa0; -W<sup>2 </sup>= W<sup>6</sup>=j and -W<sup>3 </sup>= W<sup>7 </sup>= b&#xa0; =&#xa0; (1+j)/2
			<p>
				The above diagram is same as illustrated in section ‘Fast Fourier Transform’ under ‘Basics of Fourier Transform’
			</p>
			<p>
				<strong>&#xa0;</strong>
			</p>
<h4>N=8-point radix-2 DIT-FFT</h4>
			<p>
				&#xa0;
			</p>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-58.png" width="602" height="307" alt="" />
			</p>
			<p>
				<strong>** </strong><em>W</em><em><sup>x</sup></em><em> = W</em><em><sub>8</sub></em><em><sup>x</sup></em>
			</p>
			<p>
				<strong>&#xa0;</strong>
			</p>
<h2>
			Applications 
</h2>
			<p>
				Fourier transform is used in circuit analysis, signal analysis, cell phones, image analysis, signal processing, and LTI systems. The Fourier transform is most probably the best tool to find the frequency in an entire field. This makes it a useful tool for LTI systems and signal processing. Partial differential equations reduce to ordinary differential equations in Fourier Transform.
			</p>
</body>
</html>
