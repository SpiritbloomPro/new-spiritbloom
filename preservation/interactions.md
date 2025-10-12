---
title: Spell Interactions
sidebar_position: 5
---

# Spell Interactions

Preservation is a spec that relies pretty strongly on the interaction between it's spells to get the most out of them, which means its pretty important to be aware of all the ways the spells buff or improve each other. This is a list of all the functionality and mechanics of Preservation spells to document how they really work in practice.

## Specialization Spells
### Echo
!Echo! is the most important part of the spec and plays a major role in how abilities interact with each other. The best way to think about !Echo! is that it behaves as a different cast of the spell it is !Echo!ing, so effects that always apply to the spell also benefit the !Echo!ed version but effects that only benefit your next cast of a spell will not work on !Echo!ed casts.

A natural cast of !Echo! repeats the original spell at 70% strength, this is increased by !Time Lord! to 105%. !Echo!es applied by !Resonating Sphere! repeat casts at 30% strength and get increased to 45% by !Time Lord!.

This is a basic list of all the spells !Echo! interacts with and how it behaves:

- !Living Flame!: Casting !Living Flame! on an ally while !Echo! is active on a friendly target will send an extra !Living Flame! to each !Echo!. If the target of the original !Living Flame! has an !Echo! then they will be hit by 2 !Living Flame!s. Each extra !Living Flame! has it's own chance to proc !Essence Burst!. If !Lifespark! is active when casting the original !Living Flame!, the main cast will be buffed by them but any !Echo!ed !Living Flame!s will not.

- If playing Chronowarden, !Chrono Flame! also hits everyone that gets an !Echo!ed !Living Flame!. The main cast of !Chrono Flame! generates a !Temporal Compression! stack but !Echo!ed hits won't.

- !Verdant Embrace!: !Verdant Embrace! will only make you dash to the main target, !Echo!ed !Verdant Embrace!s will heal the targets with !Echo! but won't make you move to them. !Lifebind! **does not** apply to people healed by !Echo! !Verdant Embrace!

<VideoClip url='https://imgur.com/dPh1J3w.mp4' />

- !Reversion!: !Reversion! will apply a second, different version of itself to all targets that have !Echo! when it is cast. This second !Reversion! is a different buff from the manually cast !Reversion!, meaning both can be present at the same time on the same target. Casting !Reversion! will apply !Golden Hour! on the original target and everyone who gets an !Echo!ed !Reversion! as well, scaled to the strength of the !Echo! that applied the !Reversion!. The same target can be healed by two !Golden Hour!s from base !Reversion! and !Echo!ed !Reversion! on the same cast.

- Having two different !Reversion! buffs on the same person also means you get double the effect of !Grace Period!, making it a total of 21% healing increase on said target. This effect does not scale up or down with !Echo! strength.

- !Dream Breath!: When casting !Dream Breath!, every ally with !Echo! will receive a copy of both the initial heal and the over time effects at the same rank as the original cast. Like with !Reversion!, !Echo!ed !Dream Breath! is a different buff than the regular cast, which means you can have both heals over time active on the same person at the same time.

- !Merithras Blessing!: Every ally with an !Echo! will create a **full** !Merithras Blessing!, which will heal them first before bouncing up to five times the same way the original cast does. Because !Merithras Blessing! is overrides !Reversion!, it will also apply !Reversion! to the main target *and* all allies with !Echo! when it is cast. Notably, !Echo!ing !Merithras Blessing! applies the baseline version of !Reversion!, not the !Echo! one.

To note: !Emerald Blossom!, !Rescue!, !Cauterizing Flame!, !Dream Flight!, !Rewind!, Time Dilation, and !Naturalize! do not interact with !Echo! in any way. They don't consume active !Echo!es.

### Temporal Anomaly
### Stasis
### !Reversion!
### Lifebind
### Time of Need
### Lifespark
### Titan's Gift
### Flow State
### Emerald Communion

## Class Spells
### Verdant Embrace
### Emerald Blossom
### Leaping Flames
### Hover
### Blessings of the Bronze and Time Spiral
### Spatial Paradox

## Hero Talents
### Chronoflame
### Afterimage
### Time Convergence
### Engulf and Consume Flame

## Other
### Abbreviations and IDs
### Spec Aura
### Changelog
