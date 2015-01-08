/*
Eduardo H Obieta
Hackpact 05 2015
*/
s.boot;
s.meter;
s.prepareForRecord;
s.record;
{a=Gendy1;b=LFPar;c=LFNoise0;a.ar(1,c.kr(0.2,0,0.1,0.1),1,1,b.kr(0.1,0,180,200))*b.ar([80,100]+b.kr(5,0,10,10),c.kr(150),0.4,0)}.scope
s.stopRecording;