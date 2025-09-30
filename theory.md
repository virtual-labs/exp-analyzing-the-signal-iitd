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
			<br/>
		    <h2>Properties of Continuous Time Fourier Transform (CTFT)</h2>
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
  \(
  F(x_1(t) * x_2(t)) = X_1(\omega) \cdot X_2(\omega)
  \quad \text{(‘*’ denotes convolution)}
  \)
</p>

  <li>
    <h4>Frequency Domain Convolution</h4>
  </li>
<p>
  If \( F(x_1(t)) = X_1(\omega) \), \( F(x_2(t)) = X_2(\omega) \), then:
</p>
<p>
  \(
  F(x_1(t) \cdot x_2(t)) = \frac{1}{2\pi} X_1(\omega) * X_2(\omega)
  \quad \text{(‘*’ denotes convolution)}
  \)
</p>
				<li>
					<h3>Shifting Property</h3>
				</li>
<p>
  \(
  \mathcal{F}\{x(t - t_0)\} = e^{-j\omega t_0} X(\omega)
  \)
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
  \(
  \mathcal{F}\{X(t)\} = 2\pi x(-\omega)
  \)
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
<br/>
<h2>Properties of Discrete-Time Fourier Transform (DTFT)</h2>

<li>
  <h3>Linearity</h3>
</li>
<p>The DTFT satisfies the property of linearity (superposition).</p>
<p>Consider two signals \( x_1[n] \) and \( x_2[n] \) with DTFTs:</p>
<p>
  \( \mathcal{F}\{x_1[n]\} = X_1(e^{j\omega}), \quad \mathcal{F}\{x_2[n]\} = X_2(e^{j\omega}) \)
</p>
<p>Then for any constants \( a_1 \) and \( a_2 \), we have:</p>
<p>
  \( \mathcal{F}\{a_1 x_1[n] + a_2 x_2[n]\} = a_1 X_1(e^{j\omega}) + a_2 X_2(e^{j\omega}) \)
</p>

<li>
  <h3>Time Shifting</h3>
</li>
<p>
  \(
  \mathcal{F}\{x[n - n_0]\} = e^{-j\omega n_0} X(e^{j\omega})
  \)
</p>
<p>
  Shifting in time domain introduces a linear phase shift in the frequency domain.
</p>

<li>
  <h3>Frequency Shifting</h3>
</li>
<p>
  \(
  \mathcal{F}\{x[n] e^{j\omega_0 n}\} = X(e^{j(\omega - \omega_0)})
  \)
</p>
<p>
  Multiplying by a complex exponential shifts the spectrum.
</p>

<li>
  <h3>Convolution</h3>
</li>
<p>
  Time-domain convolution corresponds to multiplication in the frequency domain:
</p>
<p>
  \(
  \mathcal{F}\{x_1[n] * x_2[n]\} = X_1(e^{j\omega}) \cdot X_2(e^{j\omega})
  \)
</p>

<li>
  <h4>Frequency Domain Convolution</h4>
</li>
<p>
  \(
  \mathcal{F}\{x_1[n] \cdot x_2[n]\} = \frac{1}{2\pi} \int_{-\pi}^{\pi} X_1(e^{j\theta}) X_2(e^{j(\omega - \theta)}) d\theta
  \)
</p>

<li>
  <h3>Symmetry</h3>
</li>
<p>If \( x[n] \) is real and even:</p>
<p>
  \( X(e^{j\omega}) = X^*(e^{-j\omega}) \)
</p>
<p>If \( x[n] \) is real and odd:</p>
<p>
  \( X(e^{j\omega}) = -X^*(e^{-j\omega}) \)
</p>
<li>
  <h3>Differencing</h3>
</li>
<p>
  The DTFT of the first difference \( x[n] - x[n-1] \) is:
</p>
<p>
  \(
  \mathcal{F}\{x[n] - x[n - 1]\} = (1 - e^{-j\omega}) X(e^{j\omega})
  \)
</p>

<li>
  <h3>Accumulation (Discrete Integration)</h3>
</li>
<p>
  \(
  \mathcal{F} \left\{ \sum_{k=-\infty}^n x[k] \right\} = \frac{X(e^{j\omega})}{1 - e^{-j\omega}} + \pi X(1) \delta(\omega)
  \)
</p>

<li>
  <h3>Modulation Property</h3>
</li>
<p>
  \(
  \mathcal{F} \{ x[n] \cos(\omega_0 n) \} = \frac{1}{2} \left[ X(e^{j(\omega - \omega_0)}) + X(e^{j(\omega + \omega_0)}) \right]
  \)
</p>
<p>
  \(
  \mathcal{F} \{ x[n] \sin(\omega_0 n) \} = \frac{1}{2j} \left[ X(e^{j(\omega - \omega_0)}) - X(e^{j(\omega + \omega_0)}) \right]
  \)
</p>

<li>
  <h3>Conjugate Symmetry</h3>
</li>
<p>
  If \( x[n] \) is real, then:
</p>
<p>
  \( X(e^{j\omega}) = X^*(e^{-j\omega}) \)
</p>
<p>
  Therefore,
  \( |X(e^{j\omega})| = |X(e^{-j\omega})| \)
</p>

<li>
  <h3>Parseval’s Theorem</h3>
</li>
<p>
  The total energy in time domain equals the total energy in frequency domain:
</p>
<p>
  \(
  \sum_{n=-\infty}^{\infty} |x[n]|^2 = \frac{1}{2\pi} \int_{-\pi}^{\pi} |X(e^{j\omega})|^2 d\omega
  \)
</p>

<li>
  <h3>Time Reversal</h3>
</li>
<p>
  \(
  \mathcal{F}\{x[-n]\} = X(e^{-j\omega})
  \)
</p>

<li>
  <h3>Periodicity</h3>
</li>
<p>
  DTFT is always periodic in \( \omega \) with period \( 2\pi \):
</p>
<p>
  \(
  X(e^{j\omega}) = X(e^{j(\omega + 2\pi)})
  \)
</p>
<br/>
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
				Thus Fourier transform of a delta/impulse is a constant equal to 1, independent of frequency. 
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
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = 1 for t ≥1
			</p>
        <p>
            Its Fourier transform is given by the following expression:
        </p>
        <!-- This is the MathJax-compatible formula -->
        <div class="formula-box">
            \(
            \mathcal{F}\{γ(t)\} = \pi\delta(\omega) + \frac{1}{j\omega}
            \)
        </div>
		<br/>
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
            The general Fourier transform of a rectangular pulse \( \text{Π}(t/\tau) \) expressed in terms of angular frequency \( \omega \) is:
        </p>
        <div class="formula-box">
            \(
            \mathcal{F}\{\text{rect}(\frac{t}{\tau})\} = \tau \frac{\sin(\omega\tau/2)}{\omega\tau/2}
            \)
        </div>
        <p>
            For our specific signal, the pulse width is \( \tau = 1 \). Substituting this value into the formula:
        </p>
        <div class="formula-box">
            \(
            X(\text{Π}) = (1) \frac{\sin(\omega(1)/2)}{\omega(1)/2}
            \)
        </div>
        <p>
            Simplifying the expression gives us the final Fourier transform:
        </p>
        <div class="formula-box">
            \(
            X(\text{Π}) = \frac{\sin(\omega/2)}{\omega/2}
            \)
        </div>
		        <div class="formula-box">
\(
X(\text{Π}) = \text{sinc}(\omega/2)
\)
        </div>
		<br/>
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
				So,            \(
                \Lambda(\omega) = \text{sinc}(\omega/2) \cdot \text{sinc}(\omega/2) = \text{sinc}^2(\omega/2)
            \)
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
    <h2>Common Discrete-Time Signals and their DTFT</h2>
    <ul>
      <li>
        <h3>Unit Impulse Sequence</h3>
        <div>Signal:</div>
        <div>\( x[n] = \delta[n] \)</div>
        <div>DTFT:</div>
        <div>\( X(e^{j\omega}) = 1 \)</div>
      </li>
	  <br/>
	  <p>
				<img src="unitImpulseDTFT.PNG" width="398" alt="" />
			</p>
      <br/>
      <li>
        <h3>Unit Step Sequence</h3>
        <div>Signal:</div>
        <div>\( x[n] = u[n] \)</div>
        <div>DTFT:</div>
        <div>\( X(e^{j\omega}) = \pi\,\delta(\omega) + \dfrac{1}{1 - e^{-j\omega}} \)</div>
      </li>
	  <br/>
	  <p>
				<img src="unitStepDTFT.PNG" width="398" alt="" />
			</p>
      <br/>
      <li>
        <h3>Discrete-Time Sinusoid</h3>
        <div>Signal:</div>
        <div>\( x[n] = \cos(\omega_0 n) \quad \text{or} \quad x[n] = \sin(\omega_0 n) \)</div>
        <div>DTFT:</div>
        <div>\( X(e^{j\omega}) = \pi\!\left[\delta(\omega-\omega_0) + \delta(\omega+\omega_0)\right] \)</div>
      </li>
	  <br/>
	  <p>
				<img src="sineDTFT.PNG" width="398" alt="" />
			</p>
      <br/>
      <li>
        <h3>Finite-Length Rectangular Pulse</h3>
        <div>Signal (length \(N\), starting at \(n=0\)):</div>
        <div>\( x[n] = \begin{cases} 1, & 0 \le n \le N-1 \\ 0, & \text{otherwise} \end{cases} \)</div>
        <div>DTFT:</div>
        <div>
          \( X(e^{j\omega}) = \displaystyle e^{-j\omega\frac{N-1}{2}} \cdot \frac{\sin\!\big(\tfrac{N\omega}{2}\big)}{\sin\!\big(\tfrac{\omega}{2}\big)} \)
        </div>
        <div>Starting at \(n=n_0\) gives:</div>
<div>
  \(
    X_{\text{shifted}}(e^{j\omega}) =
    e^{-j\omega n_0} \cdot e^{-j\omega\frac{N-1}{2}}
    \cdot \frac{\sin\!\left( \frac{N\omega}{2} \right)}
           {\sin\!\left( \frac{\omega}{2} \right)}
  \)
</div>
      </li>
	  	  <br/>
	  <p>
				<img src="rectangularDTFT.PNG" width="398" alt="" />
			</p>
    </ul>
<h2>
			Applications 
</h2>
			<p>
				Fourier transform is used in circuit analysis, signal analysis, cell phones, image analysis, signal processing, and LTI systems. The Fourier transform is most probably the best tool to find the frequency in an entire field. This makes it a useful tool for LTI systems and signal processing. Partial differential equations reduce to ordinary differential equations in Fourier Transform.
			</p>
</body>
</html>

