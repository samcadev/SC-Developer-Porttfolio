import turtle as f
import colorsys as cs 
f.setup(800,800)
f.speed(0)
f.tracer(10)
f.width(2)
f.bgcolor("black")
for a in range(25):
    for b in range(15):
        f.color(cs.hsv_to_rgb(a/15, b/25, 1))
        f.right(90)
        f.circle(200-a*4,90)
        f.left(90)
        f.circle(200-a*4,90)
        f.right(180)
        f.circle(50,24)
f.hideturtle()
f.done()
