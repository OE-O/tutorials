---
prev: ../
next: ./categories
---

# Elements

To begin with, you will want to set up your `SoftwareType` TyD table. In this there are some basic elements that you should add. They are:

| Element        | Description |
| -              | - |
| Name           | The name of the software as it will appear in dropdown lists, etc. |
| Description    | The contents of the tooltip that will appear when hovering over the software type in the dropdown menu in the design document window. |
| Category       | How the field of the software will be referred to in articles, e.g. games are categorized as "Gaming" |
| Unlock         | Which year this software type will unlock, e.g. **Unlock 1995** |
| Random         | How much sales will vary. |
| IdealPrice     | How much products of this type should ideally cost at 100% quality and interest. |
| OptimalDevTime | How many months this product should ideally take to make |
| Popularity     | How popular a software type is, which limits the maximum amount of potential consumers. |
| Retention      | How long products keep their interest after release and how long people will use the product in months. |
| Iterative      | How likely AI companies are to develop sequels for this type of software, between 0 and 1. |
| OSSupport      | Set to **True** if this product requires support by an operating system. |
| NameGenerator  | The name generator to use for simulated companies or for when the player clicks the name button in the design document. |
| SubmarketNames | A list of three submarket names, e.g. [ Gameplay; Graphics; Story ]. |

Once you have done this, your file should look something like this:

```
SoftwareType
	{
	Name			"Tutorial Software"
	Description		"This software is part of the OE-O tutorial"
	Category		Tutorial
	Unlock			1990
	Random			0.1
	IdealPrice		50
	OptimalDevTime	25
	Popularity		0.8
	Retention		18
	Iterative		0.5
	OSSupport		True
	SubmarketNames	[ Market1; Market2; Market3 ]
	}
```
