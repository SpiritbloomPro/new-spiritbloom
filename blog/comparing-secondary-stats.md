---
title: Comparing Secondary Stats
date: 2025-10-23
description: An in depth look into how secondary statistics relate to each other
authors:
    - harrek
tags:
    - general
---

Secondary stats make the majority of your gearing decisions but they are usually kind of confusing and for most people it isn't very clear how do guide writers come up with the specific recommendations they give besides "it's what the sim says". While it is true that this is a tool best left for the robots because it can get complicated really quickly there are still some basic rules that you can know to give you a better idea of how you should be picking stats and maybe even let you make decisions that are good for you but can be different from what someone else recommends.

<!-- truncate -->

## What do the numbers actually mean?

The first part is that not every stat gains the same amount of percentage from the same amount of ratings, this is the table of how much rating you need to gain 1% of each stat at level 80:

| Stat | 1% Rating  |
| --- | --- |
| Haste | 660  |
| Vers | 780 |
| Mast | 700 |
| Crit | 700 |

From there you can quickly tell that is much easier to gain 1% extra haste than it is to get 1% more versatility, as the amount of rating required is quite a bit lower. If you assume a very basic starting point of having no stats at all and no extra bonuses from your spec, and your options are then 1000 points of critical strike rating and 1000 points of versatility rating, you can very easily do the math and realize that you are choosing between 1.43% more Critical Strike or 1.28% versatility, and the Crit would give you a bigger increase to hps and dps.

## Does mastery actually suck?

You also have to remember that mastery doesn't *really* work on normal percentages like other stats but instead uses a system of Mastery Points and spec multipliers. 700 points of Mastery rating would convert to 1 *Mastery Point*, and then depending on your spec mastery points get multiplied by some number to get you how much percentage of mastery you have.

For Preservation Evoker the multiplier is **1.8**, and for Restoration Shaman is **3**. This means that for every 700 points of rating, Preservation get 1.8% more mastery and Restoration Shaman gets 3%. To complicate this even more, not all masteries are made equal and some are just better than others. Preservation and Restoration have somewhat similar ratings that work on percentages of HP but the implementations are different enough to where one is active almost all the time and the other one gets very little benefit.

We can call this the *mastery efficiency*, or what part of your mastery is actually increasing your healing. If 80% of all the healing you cast on Preservation get increased by Mastery then we can say you had a 80% mastery effectiveness. For Shaman, if you heal someone at 0% HP you would get full bonus of your mastery and if you heal someone at full hp you would get 0 benefit from it, and every point in between gets an efficiency corresponding to it. Averaging these out can give you the mastery efficiency of a given log and it's not uncommon to end up at 30% of below

:::note
80 to 90% efficiency is very common on Preservation evoker logs, and 30% or below is also common on Restoration Shaman logs. You can use WowAnalyzer to check a specific log and figure out how well your mastery worked on that specific fight.
:::

We can then factor this in on the calculation: 1000 points of rating in Crit gives me 1.43% Crit, the same points in Versatility give 1.28%. For Preservation 1000 points of mastery would result in
` 1000 / 700 * 1.8 ` 2.57% extra mastery, but i only get 80% efficiency on this mastery so i can better approximate it as a ` 2.57 * 0.8 ` 2.05% healing increase for the 1000 points.

You can start seeing why Mastery is so good on Preservation. The spec multiplier isn't super high compared to some others but the mastery itself is active in so much of our healing that is a very considerable increase and pulls ahead of the other stats quite easily.

If we do a similar calculation for the Shaman and 1000 points of mastery rating we would get ` 1000 / 700 * 3 ` 4.2% extra mastery, but at 30% efficiency this would only translate to ` 4.2 * 0.3 ` 1.26% healing increase.

Shaman also has talents that give the spec extra benefits from Critical Strike so that stat pulls even more ahead than a simple blank slate comparison and it's not uncommon to see mastery have even worse efficiencies than 30% which drop it down even more.

## Lets make it even more complicated

There are two things that add some extra complexity to choosing your secondary stats: Diminishing Returns and the Additive Increases of Multiplicative Stats (thanks Total).

Diminishing returns are a mechanic that Blizzard implemented to discourage heavily stacking a single stat. After certain breakpoints you start getting penalties on the amount of rating that gets converted into percentages of that stat. Here's a table with the breakpoints:

| Raw Percentage | Real Percentage | Penalty |
| -- | -- | -- |
| 30% | 30% | 0% |
| 40% | 39% | 10% |
| 50% | 47% | 20% |
| 60% | 54% | 30% |
| 80% | 66% | 40% |

This means that, if you have enough rating to reach 40% of a stat according to the 1% requirement of that stat (say, ` 660 * 40 = ` 26400 haste rating) in reality you would only get 39%, because the 10% from 30% to 40% takes a 10% penalty: You normally need ` 660 * 10 = ` 6600 haste rating to get 10% haste but because of the penalty to get from 30% to 40% you instead need ` (660 / 0.9) * 10 = ` 7333 rating.

This gets very severe as you start going into the higher dr brackets so you are very incentivized to spread your rating across stats as you start getting much less value from it.

The second element is the reduced return on investment you get from a stat that you already have a lot of rating in. This requires an example so lets assume you have 0% versatility and do 1000 dps, if you then gain 1% versatility your dps would go up to 1010 from the versatility and this tracks as a 1% gain (` 1010 / 1000 = 1.01 `), if you already had 20% versatility and your base dps is 1000 baseline and the versatility increases it to ` 1000 * 1.2 = ` 1200, then getting 1% more versatility would take you up to ` 1000 * 1.21 = ` 1210 dps, which is only a 0.83% gain (` 1210 / 1200 = 1.0083 `). So by the time you're at 20% versatility increasing it by another 1% is not getting you 1% more damage, but around 0.8%. By the time you reach the 30%s you are down to 0.77% increases and it just keeps going down and gets even worse as DR starts hitting.

Now lets add another stat to the comparison, lets assume critical strike works out similarly to versatility in the sense that a 1% increase to crit translates to a 1% increase to your overall dps from critting 1% of the time. So going from 0 to 1% crit is a 1% gain but same as with versatility once you're at 20 or 30% crit the increase is much less. If you are currently at 20% crit and 0% versatility, then adding 5% crit would be a 4.16% increase, but adding 5% versatility instead would be a full 5% as the two stats are additive with themselves but multiplicative with each other.

You could present this as ` Base Damage * Crit * Vers `, so if the base damage is still 1000, you can do some quick examples to see how as one stat goes higher the returns from investing more into that stat reduce but the other stat remains just as good:

```
1000 * 1.00 * 1.00 = 1000 // No stats
1000 * 1.20 * 1.00 = 1200 // 20% Crit
1000 * 1.00 * 1.20 = 1200 // 20% Vers
1000 * 1.10 * 1.10 = 1210 // 10% of each stat
```

## Conclusions

Stats are usually a little bit more complicated than that as they usually have special interactions with your spec, like Restoration Shaman critical strikes being stronger than normal or Exhilarating Burst giving crits extra value after generating an Essence Burst for Preservation, so doing this math for stats on paper is not realistic and is why there are sims and models, but this can give you a decent idea of the starting point from where the stat decisions are derived and why giving stat recommendations is never as simple as "this is you best stat, stack it forever until the end of time"