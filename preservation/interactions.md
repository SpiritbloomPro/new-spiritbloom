---
title: Spell Interactions
sidebar_position: 7
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

To note: !Emerald Blossom!, !Rescue!, !Cauterizing Flame!, !Dream Flight!, !Rewind!, !Time Dilation!, and !Naturalize! do not interact with !Echo! in any way. They don't consume active !Echo!es.

### Temporal Anomaly

Baseline !Temporal Anomaly! is a fairly straightforward spell, it sends an orb that travels forwards from your location putting a shield on every allied player it hits, the size of the shield gets reduced beyond the first five targets by a huge amount. !Temporal Anomaly! gets augmented by the choice node talent where you pick between !Resonating Sphere! and !Nozdormus Teachings!.

If you are playing !Resonating Sphere!, as !Temporal Anomaly! travels it will apply Echo to the first 5 targets it hits, this !Echo! replicates at 30% strength normally and gets increased by !Time Lord! to 45%. !Temporal Anomaly! won't overwrite manually cast !Echo!es and will just pass over people that have stronger !Echo!es and apply it's effect to other players instead.
If you have !Nozdormus Teachings!, !Temporal Anomaly! will instead reduce the current cooldown of all empower spells by 5 seconds, these being Dream Breath, and Fire Breath. If you put a !Nozdormus Teachings! !Temporal Anomaly! inside your !Stasis!, releasing your !Stasis! will reduce the cooldowns of the empowers when the !Temporal Anomaly! comes out, if you put several !Temporal Anomalies! into your !Stasis!, each one will reduce the cooldowns by 5 seconds.

### Stasis

!Stasis! also comes with its own set of complex interactions. Like with !Echo! a good way to think of !Stasis! is that it casts the spell again, it doesn't "store" the spell cast because it doesn't save some external bonuses the original spell might have had when you originally cast it, and the release is a fresh cast of the spell with whatever bonuses you have at the time of the release. The spells released from !Stasis! don't come out all together, there is a small delay between each spell.

This are the !Stasis! interactions with our spells:

- !Dream Breath! will cast at the same rank as the original one in a cone in front of you. Because !Dream Breath! always applies to yourself, releasing one from !Stasis! will overwrite the one you currently have active on yourself. If you have a !Dream Breath! buffed by !Tempo Charged! and release a !Stasis! without having four stacks of !Temporal Compression! then the new !Dream Breath! that replaces it will be weaker. Releasing a !Dream Breath! from !Stasis! also triggers !Merithras Blessing!.

- For !Temporal Anomaly!, any inside your !Stasis! will be sent in the direction you're looking at at the time of release, because !Stasis! doesn't release all the spells at the same time and there is a small delay between them, if you have multiple !Temporal Anomalies! inside !Stasis! you can send them in different directions by turning your camera during the release.

<VideoClip url="https://imgur.com/5YSDwSQ.mp4" />

- !Reversion! will cast again on the same target you used it when storing it. If you happen to have the !Merithras Blessing! proc at the moment of releasing the !Stasis!, what comes out of the !Stasis! will be a full !Merithras Blessing! rather than a simple !Reversion!.

- Any !Emerald Blossom! stored inside !Stasis! will release aimed at the same player as they were on the original cast, it will heal players around them and !Fluttering Seedlings! will choose new targets, any !Ouroboros! stacks that you might have at the time of the original cast won't affect the !Emerald Blossom! that is released later.

- !Living Flame! and !Echo! and Reversion work like you would expect, they cast again in the same target as originally cast on. These are really low value spells by themselves and shouldn't be put into your !Stasis!.

- !Cauterizing Flame! and !Naturalize! have a special type of interaction with !Stasis!: When you use a dispell on someone that doesn't have a valid debuff to dispell, the dispell doesn't go on cooldown, but it's still saved inside the !Stasis!. This means you can activate !Stasis! and then use !Cauterizing Flame! on three different players, it will have no cooldown because you're not actually dispelling anything, and then some seconds after once the targets are actually affected by a debuff you release !Stasis! and send a !Cauterizing Flame! into every one of them, dispelling three people at once. This trick is not that useful for !Naturalize! as it has a short cd but its really powerful when you need to dispell bleeds with !Cauterizing Flame!.

### Reversion

The first and most important thing to know about !Reversion! is that it is actually two different heals over time. !Reversion! and it's !Echo! version both can exist on the same player on the same time and each brings it's own set of effects with it.

For !Golden Hour!, !Reversion! itself will heal via !Golden Hour! and the !Echoed! version will also apply !Golden Hour! healing scaled to the strength of the !Echo! it was used to apply it. A weaker !Echo! from !Temporal Anomaly! would mean less !Golden Hour! healing from the !Echoed! version of !Reversion!.

!Grace Period! on the other hand is not scaled to !Echo! strength, and having two !Reversions! on the same target means double the !Grace Period! effect on that player (multiplicative between each other) regardless of if it was applied with a natural !Echo! or a !Resonating Sphere! !Echo!.

!Reversion! also has a chance to proc !Essence Burst! on cast. This means when you use the spell it has a chance to grant you !Essence Burst! once for the natural cast and then once more for each !Echo! active at the time. Similar to how !Living Flame! behaves when !Echoed!.

One interaction that !Golden Hour! specifically has with stagger-like effects like !Time Dilation! and Brewmaster monk's stagger is that !Golden Hour! considers damage taken as the whole of the damage instance before it is reduced by stagger, but also takes into account the damage taken from the stagger itself. This means that a a lot of damage taken into stagger will make !Golden Hour! heal for way more than what it seems like it should. In practice this means that !Reversion! is a good way to heal people after you !Time Dilation! them to protect them from a big hit and also we are incredibly good at healing Brewmaster.

For Midnight, every time you cast either !Echo! or !Emerald Blossom! you have a 20% chance of turning !Reversion! into !Merithras Blessing!. Casting !Merithras Blessing! will use one charge of !Reversion! if you have one available but will still be usable even if you have no charges ready. !Reversion! also gains the bonus of the !Merithras Blessing Reversion! component, which translates into anyone with an active !Reversion! absorbing 4% of any damage they take and right after healing for the same amount, for a total of 8% damage reduction.

### Merithra's Blessing

Our apex talent, it makes it so that every time you use either !Echo! or !Emerald Blossom! you have a 20% chance to turn !Reversion! into !Merithras Blessing!.

- !Merithras Blessing! is an instant-cast spell that will instantly heal the target and then proceed to jump up to five times to other injured players healing them for the same amount. If there are no more injured players nearby it can do all of its jumps on the same target healing them multiple times

- !Merithras Blessing! !Echoes! fully, meaning every !Echo! you consume with it will do the initial heal and all the five extra bounces.

- Despite being a replacement for !Reversion!, it still applies a normal !Reversion! on the target of the cast and on any !Echoes! it consumes. Notably, !Echoing! !Merithras Blessing! will apply the baseline version of !Reversion!, not the !Echo! one.

### Lifebind

Every time you use !Verdant Embrace! on someone that isn't yourself that target will have !Lifebind! applied on them. While !Lifebind! is active 60% of the healing you do on either target will transfer to the other. **!Lifebind! does not apply to !Echoed! !Verdant Embrace!**.

You are usually limited to one !Lifebind! at the same time but things like !Wings of Liberty! and !Stasis! can let you have multiple up at the same time. In this case it is important to remember that **!Lifebind! works between you and the affected players, and not from the affected players to each other**, healing you do to yourself will transfer to all !Lifebinds! but healing someone else that has !Lifebind! will only transfer back to you, not to everyone else.

!Lifebind! will transfer any healing done by you, it doesn't necessarily have to be things specific to Preservation, you can !Lifebind! healing potions or warlock health stones. Effects that increase the healing you do or take like a priests' !Guardian Spirit! or !Divine Hymn! also increase the amount that gets transferred.

### Time of Need

!Time of Need! will spawn a clone of you when any nearby ally drops below 30% health, the clone will first cast one !Verdant Embrace! and then as many !Living Flames! as it can during the next 8 seconds on that same target. Some of your stats, talents and buffs will improve the healing !Time of Need! does, here is a comprehensive list:

| Benefits from:                                  | Does not benefit from: |
|-------------------------------------------------|------------------------|
| Versatility, Critical Strike, Haste             | !Mastery!              |
| Trinkets or buffs that increase secondary stats | !Leaping Flames!       |
| !Enkindled!                                     | !Ancient Flame!        |
| !Lifeforce Mender!                              | !Scarlet Adaptation!   |
| !Call of Ysera!                                 | !Grace Period!         |
| !Flow State!                                    | !Chrono Flame!         |
| !Exhilarating Burst!                            |                        |
| !Rescue! (You can rescue the clone)             |                        |
| !Lifespark!                                     |                        |

To note, !Time of Need! also has a ~100% power increase to all spells it casts compared to your own.

### Lifespark

- !Time of Need! benefits from !Lifespark!. Having the buff up while our !Time of Need! clone is casting !Living Flames! will increase their healing without consuming the buff.

- Consuming !Leaping Flames! while having a !Lifespark! charge will not increase all the damage and healing those !Living Flames! do. Only the main cast will be buffed by !Lifespark!.

- !Call of Ysera! and !Lifespark! stack. Having both buffs up when casting a !Living Flame! will increase its healing multiplicatively.

- !Lifespark! does not !Echo!. Healing someone with an !Echoed! !Living Flame! buffed by !Lifespark! will only hit them with a normal, unbuffed !Living Flame!.

### Titan's Gift

!Echoes! cast with !Essence Bursts! will have their initial heal increased by 25%, and also transfer 25% more when they are consumed (88% power without !Time Lord! and 131% with it), and !Emerald Blossoms! cast with !Essence Bursts! will heal for 25% more.

### Flow State

Every point in Flow State gives you:

- 5% faster cooldown recovery rate
- 5% movement speed
- 5% increased cast speed
- 5% increased essence regeneration rate

What it doesn't give you:

- 5% faster progression of buffs/debuffs on you
- haste effects on dots/hots
- faster rppm proc rates

## Class Spells

### Verdant Embrace

Casting !Verdant Embrace! will instantly make you fly to your targeted ally and heal them and apply !Lifebind! when you land. You will physically fly through any mechanic or ground aoe in the way between your starting position and your final destination which can very easily result in your death if you are not careful.

<VideoClip url="https://i.imgur.com/Z25ZGeP.mp4" />

You can avoid the flight by talenting into !Dream Simulacrum!, and can cast !Verdant Embrace! multiple times in succession by talenting into !Wings of Liberty!. !Verdant Embrace! is a very potent tool in Preservation's kit as a very powerful single target heal that can be !Echoed! and learning how to use it in the correct situations without killing yourself is important.

### Emerald Blossom

On cast !Emerald Blossom! will appear on the ground below the targeted ally and will burst after 1.5 seconds, healing five injured friendly targets inside it's aoe. Each !Emerald Blossom! will spawn two !Fluttering Seedlings!, and every other cast of !Emerald Blossom! will convert one of these !Fluttering Seedlings! into another full-power !Emerald Blossom!.

!Emerald Blossoms! stored inside Stasis will cast on the same target as the original cast when released, and consume the !Ouroboros! stacks you have at the moment of release.

For Flameshaper, any target healed by !Emerald Blossom! will also be healed by !Enkindle! if you are talented into it for 20% of the total amount.

### Leaping Flames

Casting !Fire Breath! will give you the !Leaping Flames! buff, which will make your next !Living Flame! spawn additional !Living Flames! depending on the rank of the !Fire Breath!, each rank adds one additional !Living Flame!. With !Font of Magic! the maximum amount of extra !Living Flames! !Leaping Flames! can give is 4, this means that casting !Living Flame! will hit five targets, one for the original cast and four extras from !Leaping Flames!.

If the !Living Flame! that consumes the buff is an offensive one, then the extra !Living Flame! will try to hit unique enemy targets, if you have more extra !Living Flames! than there are enemies available then the !Living Flames! will heal nearby allies. In a single target scenario this means that casting !Living Flame! with !Leaping Flames! on the one enemy you are fighting will hit that enemy with one !Living Flame! and four nearby allies with healing !Living Flames!. This healing !Living Flames! will not consume any !Echoes! you might have out at the time and they also won't consume !Lifespark! nor benefit from it.

If you cast !Living Flame! on an ally while !Leaping Flames! is up, then the extra !Living Flames! will aim towards nearby allies. The extra !Living Flames! will not benefit from !Lifespark! and the buff will be consumed.

### Hover

By default !Hover! has a 35 seconds cooldown, this is reduced to 30 by !Blessing of the Bronze! and when playing Chronowarden further reduced to 26s with !Warp!.

!Hover! sends you dashing in the direction you are currently moving and then applies an six second buff that lets you cast non-empowered spells while moving. If you are not moving in any direction at the moment you cast it you won't dash and instead you will simply instantly get the buff.

<VideoClip url="https://imgur.com/TZ08xsQ.mp4" />

 The hero talents alter the way Hover works:

- Flameshapers can get !Trailblazer! which makes !Hover! travel 40% quicker and 40% further

- Chronowardens can get !Warp! which turns !Hover! into a blink. This is further enhanced by !Temporality! turning !Warp! into a damage reduction. This dr starts at 20% and gets reduced every 0.3 by 2%, lasting a total of 3 seconds

### Blessings of the Bronze and Time Spiral

!Blessing of the Bronze! will reduce the cooldown of a movement ability by 5 seconds, while !Time Spiral! will give everyone a 10 seconds buff that gives one extra charge of their movement spell. These are the spells both buffs benefit for each class:

| Class        | Spell                                                  |
|--------------|--------------------------------------------------------|
| Death Knight | !Deaths Advance!                                       |
| Demon Hunter | !Fel Rush! / !Infernal Strike!                         |
| Druid        | !Dash! / !Tiger Dash!                                  |
| Evoker       | !Hover!                                                |
| Hunter       | !Aspect of the Cheetah!                                |
| Mage         | !Blink! / !Shimmer!                                    |
| Monk         | !Roll! / !Chi Torpedo!                                 |
| Paladin      | !Divine Steed!                                         |
| Priest       | !Leap of Faith!                                        |
| Rogue        | !Sprint!                                               |
| Shaman       | !Gust of Wind! / !Spirit Walk! / !Spiritwalkers Grace! |
| Warlock      | !Demonic Circle!                                       |
| Warrior      | !Heroic Leap!                                          |

### Spatial Paradox

!Spatial Paradox! can only be cast on friendly healers and will give you and your target a 10 seconds buff that doubles the range of all your spells. If you use it without a healer targeted it will automatically pick the nearest one.

All the targetable spells except !Rescue! go up to 60 yards of range, and all the frontal cone spells also get their radius doubled. !Temporal Anomaly! doesn't travel twice as far however.

## Hero Talents

### Chronoflame

For Chronowardens, !Chrono Flame! will 'replace' !Living Flame! on your spell book. The way this works in practice is:

1. You cast !Chrono Flame! on a target, enemy or ally
2. They first get hit by a normal !Living Flame!, increased by any bonuses like !Enkindled! and !Lifeforce Mender!
3. Right after, they get hit by !Chrono Flame! itself, doing 15% of any healing or damage you have done to that same target on the last five seconds, with a cap of 3.5 times your spell power increased by versatility.

And a couple of things to know about this spell:

- Any !Echoed! !Chrono Flame! will also behave in this same way.
- !Chrono Flames! generated by !Afterimage! also cast a full !Living Flame! + !Chrono Flame!.
- The cap is per target and it's not really worth tracking or worrying about it.
- !Chrono Flame! turns !Living Flame! into a bronze spell, and now every hard cast generates a stack of !Temporal Compression!. !Echoed!!Chrono Flame! and the ones from !Afterimage! don't generate more stacks.

### Afterimage

!Afterimage! produces three full power !Chrono Flames! on each empower cast. These !Chrono Flames! land on three targets that where hit by the empower spell that spawned them: !Dream Breath! would send them on allies and !Fire Breath! on enemies.

The amount of !Chrono Flames! caused depends on the amount of targets hit, not the empower level. A rank one !Dream Breath! or !Fire Breath! will still spawn three !Chrono Flames! if they hit three targets.

!Chrono Flames! generated by !Afterimage! benefit from static effects like !Enkindled! and !Lifeforce Mender!, but do not benefit from dynamic buffs like !Lifespark!. Each !Chrono Flame! also has its own chance to generate a !Essence Burst!.

### Time Convergence

| Activates it           | Doesn't activate it |
|------------------------|---------------------|
| !Deep Breath!          | !Zephyr!            |
| !Oppressing Roar!      | !Tail Swipe!        |
| !Fury of the Aspects!  | !Wing Buffet!       |
| !Tip the Scales!       | !Time Dilation!     |
| !Rewind!               | !Rescue!            |
| !Stasis! (Initial use) | !Stasis! release    |
| !Time of Need!         | !Landslide!         |
| !Time Spiral!          | !Obsidian Scales!   |
| !Dream Flight!         | !Spatial Paradox!   |

### Consume Flame

Healing a target that has a !Dream Breath! active with either !Verdant Embrace! or !Emerald Blossom! will cause !Consume Flame!, reducing the duration remaining on the !Dream Breath! buff and healing that target for twice the amount the heal over time would do over a period of time, four seconds for !Verdant Embrace! and two seconds for !Emerald Blossom!. It is important to notice that unlike the previous version of !Consume Flame!, **it will only heal the player whose !Dream Breath! is getting consumed, and do no AoE healing at all**.

Each instance of !Verdant Embrace! or !Blossom! healing causes its own !Consume Flame!, so !Echoing! the spells means you can cause multiple !Consume Flames! at the same time and even multiple times on the same target.

The healing of !Consume Flame! depends on the healing of !Dream Breath!, and not the !Verdant Embrace! or !Blossom! that triggered it, so to increase its healing you can use talents like !Call of Ysera!, !Renewing Breath!, !Expanded Lungs!, !Tempo Charged! and !Fulminous Roar!.