/*Eduardo H Obieta
Hackpact 01 2015
*/
p=ProxySpace.push(s.boot)
s.prepareForRecord;
s.record;
p.fadeTime=8;
~out.play
~out=0;
~out=~hackpact00;
~out=~hackpact00+~hackpact02;
~out=~hackpact00+~hackpact01+~hackpact02;

~hackpact00={SinOsc.ar([80,78]*Demand.ar(Impulse.ar(1),1,Drand([1,1.1,0.9,0.96,1.06,1.2],inf)),0,0.35)*Crackle.ar(Demand.ar(Impulse.ar(Demand.ar(Impulse.ar(1),1,Drand([1,0.5,2,4],inf))), 1, Drand([1.2,1.5,1.8,0.6,2,0.5,0.7],inf)),0.6)}
~hackpact01={SyncSaw.ar(Demand.kr(Impulse.kr(1), 1, Drand([80,90,100,120]*1.5,inf)),Demand.kr(Impulse.kr(1), 1, Drand([180,190,200,220]*Demand.kr(Impulse.kr(1), 1, Drand([1,2],inf)),inf)),0.15)*LFNoise0.kr(Demand.kr(Impulse.kr(1),1,Drand([4,10,50,70]/2
	,inf)),0.7)}
~hackpact02={SinOsc.ar([60,64]*Demand.kr(Impulse.kr(1),1,Drand([1,1.1,1.2,0.9,0.8,1.5]),inf),0,0.5)*Pulse.kr(Demand.kr(Impulse.kr(4),1,Drand([2,1,3,5]*0.7,inf)))+LFDNoise0.ar(LFDClipNoise.kr(250),0.5)}
s.stopRecording;
