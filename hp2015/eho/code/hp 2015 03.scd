/*
Eduardo H Obieta
Hackpact 03 2015
*/
s.boot;
s.prepareForRecord;
s.record;
(
play{a=SinOsc;b=Crackle;Pan2.ar(a.ar(a.kr(0.1,0,100,a.kr(0.2,0,25,50))*b.kr(a.kr(0.25,0,0.3,1.5)),0,0.5),a.kr(0.1,0,1,0))}
)
s.stopRecording;