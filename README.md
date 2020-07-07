# Interactive Ocarina
This is an interactive ocarina inspired by the titular item from The Legend of Zelda: Ocarina of Time. Do you know any songs from the game? See what happens when you play one! Play the ocarina [here](https://cartochien.github.io/interactive_ocarina/).

## Demo
<p align="center">
<img src="https://github.com/cartochien/interactive_ocarina/blob/master/demo.gif" width="500">
</p>

## Users & Audience
The target users for the Interactive Ocarina are Zelda fans and gamers in general. For many users in this group, Ocarina of Time was one of the first video games they ever played and naturally it holds a special place in their hearts. This web app is meant to be a whimsical and nostalgic experience for all those that enjoyed the game. 

## Design Process
I consider myself a target user for this web app and I felt that the most important thing to accomplish was its functionality. If the web app experience was not reminiscent of the ocarina mechanic in the actual game then the nostalgic experience I wanted to create would not be fully realized. With this in mind, I defined two essential features that this web app would have. The first feature was for it to have the same five playable notes as the ocarina from the game. The second feature was for it to have ten possible songs that could play back to the user as easter eggs if they played the notes in a certain order. 

I began my design process by sketching a few drafts of what I wanted the web app layout to look like. Once I had a rough draft I was happy with, I started the actual work on my project by coding the functionality first and then designing the look and feel second. My first iteration of the web app was mostly javascript code with the minimum amount of HTML necessary for it to run. I was using my keyboard to test the song and note functionality against a blank web page.

<p align="center">
<img src="https://github.com/cartochien/interactive_ocarina/blob/master/images/oc_draft.PNG" width="350">
</p>

I then created my first prototype of the ocarina and incorporated it into my web app. It featured keyboard instructions and basic animation that would illuminate certain holes of the ocarina depending on what notes were played. Now that I was working with something I could see, it was easier for me to jot down notes on what I liked about it so far and what I could work on next. The core of what I wanted my web app to be was finished and it was time to devote my efforts into the look and feel.

<p align="center">
<img src="https://github.com/cartochien/interactive_ocarina/blob/master/images/oc_prototype_demo.gif" width="500">
</p>

The visual design process ended up being more iterative and nonlinear than I anticipated. I thought I was done with the coding aspect of my project, but each progressive design feature I worked on would inspire me to revisit my code with new ideas. For instance, I thought about animating the keyboard instructions so that it would show on the screen which key you are pressing at any given time. I went back to my code to try out this idea and I was more than pleased with the increased on-screen interactivity. This then inspired me to think about how this would interact if they keys on the screen could be clicked or touched. When I went back to my code to include click and touch functionality, I realized I would need to redesign what was the keyboard instructions into a more general control interface. The process leading up to the final product was a constant pinging back and forth of ideas between design and code until the purposes of each felt seamless with the other.

<p align="center">
<img src="https://github.com/cartochien/interactive_ocarina/blob/master/images/oc_default.png" width="350">
</p>

## User Interface and Interaction Design
The objective of the interface was to create a familiar and nostalgic experience that Zelda fans would immediately know how to interact with. This was accomplished by creating an interface that stayed true to the design of the song-playing mechanic in the video game.

<p align="center">
<img src="https://github.com/cartochien/interactive_ocarina/blob/master/images/epona_song.gif" width="400">
</p>

The core interaction feature of the Interactive Ocarina are the note buttons which can be pressed by mouse, touch, or keyboard. When the note buttons are pressed, the corresponding holes for the note that is played are illuminated on the ocarina. 

Playing a note by using a keyboard or by touching the screen on a mobile device causes the corresponding button to enlarge which visually reinforces to the user which button is being pressed. In addition, since the button gets larger and appears seemingly closer to the user, the button will also brighten in color as if it were rising to the surface and getting closer to a light source.

<p align="center">
<img src="https://github.com/cartochien/interactive_ocarina/blob/master/images/keyboard_interaction_demo.gif" width="500">
</p>

Using the mouse to play with the ocarina behaves similarly to how it does when interacted with a keyboard or touch screen. The difference is that there is an intermediary phase to visually reinforce when the mouse is hovering over a button and when it actually clicks the button. Hovering the mouse cursor over a note button enlarges the button so users know that mouse interactivity is possible. It is only when the button is clicked that it will also brighten in color.

<p align="center">
<img src="https://github.com/cartochien/interactive_ocarina/blob/master/images/mouse_interaction_demo.gif" width="500">
</p>

These forms of visual feedback were included not only for their aesthetic satisfaction. In the event that there is no volume, they provide another avenue for the user to be assured that they are interacting with the web app.

## Outcome
The ocarina has been well received amongst my friends who felt it was a delight to play with and were happily reminded of memories from their childhood playing the original game that inspired it. While this ocarina has not been spread widely across the internet, I am sure that it will be just as much of a joy to play for anyone else who comes across it. 

As a result of this experience, I got to wear many hats ranging from coding the functionality to drawing the vector illustrations. This project gave me an opportunity to think intentionally about my design choices and make a web app that my current self would love to be able to show to my eight year old self.

## Acknowledgments
Special thanks to Joel Day and his collection of Zelda sound effects at http://noproblo.dayjo.org/ZeldaSounds/ from which I was able to find every sound I needed for my app.
