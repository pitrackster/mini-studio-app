System.register(['angular2/core', '../oscillator/oscillator', '../keyboard/keyboard', '../../models/Voice'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, oscillator_1, keyboard_1, Voice_1;
    var SimpleSynth;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (oscillator_1_1) {
                oscillator_1 = oscillator_1_1;
            },
            function (keyboard_1_1) {
                keyboard_1 = keyboard_1_1;
            },
            function (Voice_1_1) {
                Voice_1 = Voice_1_1;
            }],
        execute: function() {
            //import {Note} from '../keyboard/models/Note';
            SimpleSynth = (function () {
                function SimpleSynth() {
                }
                //protected voice:Voice;
                SimpleSynth.prototype.ngOnInit = function () {
                    this.voices = new Array();
                    // create master output vca / gain
                    this.master = this.ac.createGain();
                    this.master.connect(this.ac.destination);
                };
                SimpleSynth.prototype.ngAfterViewInit = function () {
                };
                SimpleSynth.prototype.noteOn = function (freq) {
                    //console.log('simple synth play note at frequency called ' + freq);
                    //console.log(this.notes);
                    var voice = new Voice_1.Voice(this.ac, this.master);
                    voice.start(freq);
                    this.voices.push(voice);
                };
                SimpleSynth.prototype.noteOff = function (frequency) {
                    console.log('simple synth note off called ');
                    var toKeep = new Array();
                    for (var i = 0; i < this.voices.length; i++) {
                        if (Math.round(this.voices[i].OSC1.frequency.value) === Math.round(frequency)) {
                            this.voices[i].stop();
                        }
                        else {
                            toKeep.push(this.voices[i]);
                        }
                    }
                    this.voices = toKeep;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', AudioContext)
                ], SimpleSynth.prototype, "ac", void 0);
                SimpleSynth = __decorate([
                    core_1.Component({
                        selector: 'simple-synth-comp',
                        templateUrl: './app/components/simple-synth/simple-synth.html',
                        directives: [
                            oscillator_1.Oscillator,
                            keyboard_1.Keyboard
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SimpleSynth);
                return SimpleSynth;
            }());
            exports_1("SimpleSynth", SimpleSynth);
        }
    }
});
//# sourceMappingURL=simple-synth.js.map