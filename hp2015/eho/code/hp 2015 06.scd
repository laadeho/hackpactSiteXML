/*
Eduardo H Obieta
Hackpact 06 2015
*/
s.boot;
s.meter;
s.prepareForRecord;
s.record;

a={a=SinOsc;b=a.kr(0.1,0,0.3,0.7);c=Saw;(Gendy3.ar(5, a.kr(1,0,0.5,0.5),b,b,200*b+50*b)*(Impulse.kr(4+a.kr(0.1,0,5,10),0.3)*a.kr(1,0,0.5,0.5)))!2}.play
a.free
s.stopRecording;