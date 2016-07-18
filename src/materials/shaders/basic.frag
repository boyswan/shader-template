precision mediump float;
precision mediump int;
//
varying vec3 vPosition;
varying vec3 vColor;

void main()	{
	//
	// float mouseAverage = (vPosition.y * 0.0005) * (vPosition.y * 0.0005);
	vec4 color = vec4( vColor, 1 );

	color.r = 155.0;
	color.b = 255.0;

	gl_FragColor = color;

}
