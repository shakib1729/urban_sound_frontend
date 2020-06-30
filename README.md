<h1 align="center">Sound Classification using Images - Urban Sound Classification</h1>

<p align="center">
<img src="https://user-images.githubusercontent.com/39847281/78693980-a05fd600-7919-11ea-96d9-e12e2a12ba3d.JPG"></p>
<br/>
<p align="center">
<img src="https://user-images.githubusercontent.com/39847281/78693594-1879cc00-7919-11ea-81bc-0ce58aae8b19.JPG"></p>

## 

## About the project.
The goal of this project is to classify urban sounds into ten classes (jackhammer, engine_idling, siren, children_playing, drilling, street_music, air_conditioner, dog_bark, car_horn and gun_shot) <br/>
This project classifies the sounds by first getting the visual representation of the sound and then using a CNN classifier to classify the sounds.<br/>
These visual representations of sounds are called spectrograms <br/>
In a spectrogram representation plot — one axis represents the time, the second axis represents frequencies and the colors represent magnitude (amplitude) of the observed frequency at a particular time<br/>

This repository contains the implementation of the front-end part of the project using ReactJS<br/>

## Dataset:
UrbanSound8k dataset: https://urbansounddataset.weebly.com <br/>
It contains 8732 labeled sound excerpts (<=4s) of urban sounds from 10 classes: air_conditioner, car_horn, children_playing, dog_bark, drilling, enginge_idling, gun_shot, jackhammer, siren, and street_music.

## Libraries used:
1) Librosa - To load the sound files
2) Matplotlib - To plot the spectrogram of the audio files

## Implementation
1)
