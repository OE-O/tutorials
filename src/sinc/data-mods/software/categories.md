---
prev: ./elements
next: ./features
---

# Categories

Lets add some categoryies to our software. Categories are completly optional, and if left out a "Default" category will be generated. Categories have some special elements these are `Submarkets` and `TimeScale`. Submarkets are also part of features, they are the ratio of the submakets that we defined. Timescale is how long it will take to make a product in this category compared to the base software type, should be between 0 and 1.

Just under `SubmarketNames` add two categories. "Home" and "Professional". It should look something like this:

```
	Categories
		[
			{
			Name			"Home"
			Description		"For all of the normal users out there"
			Popularity		0.8
			Submarkets		[ 1; 3; 1 ]
			Retention		18
			TimeScale		0.5
			Iterative		0.75
			}
			{
			Name			"Professional"
			Description		"For use within large companies"
			Popularity		0.2
			Submarkets		[ 1; 2; 2 ]
			Retention		24
			TimeScale		1
			Iterative		0.5
			}
		]
```

Now, we should add some actuall features to our software! 