# Interactive Ocarina
This is an interactive ocarina inspired by the titular item from The Legend of Zelda: Ocarina of Time. Do you know any songs from the game? See what happens when you play one! Play the ocarina [here](https://cartochien.github.io/interactive_ocarina/).

## Demo
<p align="center">
<img src="https://github.com/cartochien/interactive_ocarina/blob/master/demo.gif" width="500">
</p>

## Users & Audience
The target users for the Interactive Ocarina are Zelda fans and gamers in general. For many users in this group, Ocarina of Time was one of the first video games they ever played and naturally it holds a special place in their hearts. This web app is meant to be a whimsical and nostalgic experience for all those that enjoyed the game. 

## Design Process
I consider myself a target user for this web app and I felt the most important thing to accomplish was its functionality. If the web app experience was not reminiscent of the ocarina mechanic in the actual game then the nostalgic experience I wanted to create would not be fully realized. This meant that from the beginning I knew my web app, at the very least, would have five playable notes and ten possible songs that would play back to the user if they played the notes in a certain order. With this in mind, I began my design process by sketching a few drafts of what I wanted the web app layout to look like.

Once I had a rough draft I was happy with, I started the actual work on my project by coding the functionality first and then designing the look and feel second. My first iteration of the web app was pure javascript code with the minimum amount of HTML necessary for it to run. I was using my keyboard to test the song and note functionality against a blank web page.

<p align="center">
<img src="https://github.com/cartochien/interactive_ocarina/blob/master/images/oc_draft.PNG" width="350">
</p>

I then created my first prototype of the ocarina and incorporated it into my web app. It featured basic animation that would illuminate certain holes depending on what notes were played. Now that I was working with a tangible web app, it was easier for me to jot down notes on what I liked about it so far and what I could work on next. The core of what made my web app what I wanted it to be was finished and it was time to devote my efforts into the look and feel.

<p align="center">
<img src="https://github.com/cartochien/interactive_ocarina/blob/master/images/oc_prototype_demo.gif" width="350">
</p>

The visual design process ended up being more iterative and nonlinear than I anticipated. I thought I was done with the coding aspect of my project, but each progressive design feature I worked on would inspire me to revisit my code with new ideas. 

When I was putting together the sheet music interface underneath the ocarina, an interface meant to be a clever way of displaying the keyboard instructions, I thought 

For instance, my web app was originally meant to be played by keyboard only and the sheet music underneath the ocarina in my rough draft was meant to be a clever way of providing the user with keyboard instructions. As I was putting together the sheet music interface as laid out by my rough draft, I thought how nice it would be to see the notes themselves animate as you press the corresponding keys on the keyboard. 

<p align="center">
<img src="https://github.com/cartochien/interactive_ocarina/blob/master/images/oc_default.png" width="350">
</p>

## User Interface and Interaction Design
The objective of the interface was to create a familiar and nostalgic experience that Zelda fans would immediately know how to interact with. This was accomplished by creating an interface that stayed true to the design of the song-playing mechanic in the video game.

<p align="center">
<img src="https://github.com/cartochien/interactive_ocarina/blob/master/images/epona_song.gif" width="400">
</p>

The core interaction feature of the Interactive Ocarina are the note buttons which can be pressed by mouse, touch, or keyboard. When the note buttons are pressed, the corresponding holes for the note that is played are illuminated on the ocarina. 

<p align="center">
<img src="https://github.com/cartochien/interactive_ocarina/blob/master/images/keyboard_interaction_demo.gif" width="500">
</p>

Playing a note by using a keyboard or by touching the screen on a mobile device causes the corresponding button to enlarge which visually reinforces to the user which button is being pressed. In addition, since the button gets larger and appears seemingly closer to the user, the button will also brighten in color as if it were rising to the surface and getting closer to a light source.

<p align="center">
<img src="https://github.com/cartochien/interactive_ocarina/blob/master/images/mouse_interaction_demo.gif" width="500">
</p>

Using the mouse to play with the ocarina behaves similarly to how it does when interacted with a keyboard or touch screen. The difference is that there is an intermediary phase to visually reinforce when the mouse is hovering over a button and when it actually clicks the button. Hovering the mouse cursor over a note button enlarges the button so users know that mouse interactivity is possible. It is only when the button is clicked that the button will also brighten in color.

These forms of visual feedback were included not only because they are aesthetically satisfying, but because, in the event that there is no volume, they provide another avenue for the user to be assured that they are interacting with the web app.

## Outcome
The ocarina has been well received amongst my friends who felt it was a delight to play with and were happily reminded of memories from their childhood playing the original game that inspired it. While this ocarina has not been spread widely across the internet, I am sure that it will be just as much of a joy to play for anyone else who comes across it. 

As a result of this experience, I got to wear many hats ranging from coding the functionality to drawing the vector illustrations. This project gave me an opportunity to think intentionally about my design choices and make a web app that my current self would love to be able to show to my eight year old self.

## Acknowledgments
Special thanks to Joel Day and his collection of Zelda sound effects at http://noproblo.dayjo.org/ZeldaSounds/ from which I was able to find every sound I needed for my app.
