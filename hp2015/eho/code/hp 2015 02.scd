/*
Eduardo H Obieta
Hackpact 02 2015
*/
s.boot;

d=Buffer.read(s, "D:/LAAd Pagina/09 website/Salidas/hp2015/octa.wav", 0);

Ndef(\hp2).play;
Ndef(\hp2, {|pos = 1, amp = 0.8, rate = -1, t_trig=1, pan=0| Pan2.ar(PlayBuf.ar(d.numChannels, d.bufnum, rate, t_trig, d.numFrames*pos, 0, 0)*EnvGen.kr(Env.perc(0.15,0.5,1,4),t_trig),pan,amp)});

Ndef(\hp2).quant_(2)[1]=\set -> Pbind(\dur, Pseq([0.25,0.5,0.25,0.25],inf), \pos, Pseq([0.07,0.15,0.5],inf),\amp, Pseq([0.7],inf), \rate, Pseq([-1],inf), \t_trig,1);
Ndef(\hp2).quant_(2)[1]=\set -> Pbind(\dur, Pseq([0.25,0.5,0.25,0.25,0.5,0.25,0.25,0.5,0.5,0.25],inf), \pos, Pseq([0.07,0.15,0.5],inf),\amp, Pseq([0.7,0.5,0.65,0.3],inf), \rate, Pseq([-1,1,0.5,-1,0.75,0.5,1],inf), \t_trig,1);
Ndef(\hp2).quant_(2)[1]=\set -> Pbind(\dur, Prand([0.25,0.5,0.25,0.25,0.5,0.25,0.25,0.5,0.5,0.25],inf), \pos, Prand([0.07,0.15,0.5],inf),\amp, Prand([0.7,0.5,0.65,0.3],inf), \rate, Prand([-1,1,0.5,-1,0.75,0.5,1],inf), \t_trig,1);

Ndef(\hp2).release(2);
