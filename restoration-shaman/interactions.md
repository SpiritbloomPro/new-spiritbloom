---
title: Spell Interactions
sidebar_position: 7
---

# Spell Interactions

Here you will find details on how the Restoration Shaman spells work. The goal here is to document in depth how the spells actually interact with each other and with other mechanics in order to understand them better.

## Specialization Spells

### Chain Heal

- !Chain Heal! starts on your target and jumps on the path that will do the most overall effective hps.
- By default it jumps three times for four total targets healed. This can be increased by !Ancestral Reach! or !Flow of the Tides!.
- !Unleash Life! and !Flow of the Tides! buff the healing of the whole !Chain Heal! cast. Most other conditional bonuses only increase the healing of individual jumps.

### Healing Rain

- !Healing Rain! will do its first tick of healing as it is placed down and its last one right before going away.
- !Acid Rain! doesn't scale with haste. It also doesn't do its first hit as soon as !Healing Rain! is put down.

### Healing Stream Totem

- By default !Healing Stream Totem! will heal a single ally every two seconds reduced by haste.
- !Quickstream! reduces the time between ticks by 15%.
- !Living Stream! doubles the healing of !Healing Stream Totem! but decays over its duration, averaging a 50% increase.
- !Splitstream! adds an additional target to every tick of !Healing Stream Totem!.
- Every tick of !Healing Stream Totem! has a chance to apply !Earthliving! thanks to !Primal Catalyst!.
- When !Stormstream Totem! procs, you will get a free use of it regardless of the current cooldown of !Healing Stream Totem!. !Stormstream Totem! also adds one more target to heal going up to three with !Splitstream!.
- !Elemental Resistance! makes healing from !Healing Stream Totem! apply a buff that reduces fire, frost and nature damage taken.

### Unleash Life

- On cast, you will get the !Unleash Life! buff increasing your next !Chain Heal!, !Riptide! or !Healing Wave! by 25% and reducing the cast time by 30%.
- Your !Season One Tier Four Piece! makes this buff have two charges.
- !Earthen Accord! increases the healing of !Unleash Life! by 30% and makes the buff increase your other spells by 30% instead.

### Deluge

- "Affected by your healing rain" on the !Deluge! tooltip is simply people inside the !Healing Rain! area regardless of when !Healing Rain! last ticked.
- For !Chain Heal! it only buffs the heal on that specific target and doesn't modify subsequent jumps.

### Ancestral Vigor

Targets that get their HP increased by !Ancestral Vigor! keep the same percentage hp going up and down as the bonus applies and expires.

## Hero Talents

### Surging Totem

!Surging Totem! completely replaces !Healing Rain! when you spec into Totemic, and will maintain the rain for you in the area the totem is currently placed at. However because the cooldown of !Surging Totem! is longer than what baseline !Healing Rain! has, the spec also has the !Totemic hidden aura! which the following effects:

- !Healing Rain! heals for 30% more (this is mentioned on the !Surging Totem! tooltip).
- !Downpour! healing increased by 100%.
- !Overflowing Shores! healing increased by 100%.
- !Tidewaters! healing increased by 100%.
- !Acid Rain! damage increased by 30%.

### Call of the Ancestors

Your ancestors cast their own version of the spells, those spells have their own power that is different from yours and are not affected by your talents that buff certain spells unless specifically mentioned, like on !Whispering Waves!.

!Ancestor Lava Burst! will always crit regardless of if the target has !Flame Shock! on them or not.

An important thing to note about ancestors is the way they respond to spell queue: If you spell queue either !Unleash Life! or !Ancestral Swiftness! the ancestor that spawns from them will also respond to the spell you queued *from*. If you start casting a !Healing Wave! and midway through the cast you use !Unleash Life! to queue it so it casts right after your !Healing Wave!, the ancestor that spawns from !Unleash Life! will also do their own !Ancestor Healing Wave! cast to match yours even though the cast happened before it spawned. Abusing this can get you a lot more casts out of the ancestors over the course of a fight or key.

| You Cast | Your Ancestor Casts |
| --- | --- |
| !Riptide! | !Ancestor Healing Surge! |
| !Healing Wave! | !Ancestor Healing Wave! |
| !Unleash Life! | !Ancestor Healing Surge! |
| !Chain Heal! | !Ancestor Chain Heal! |
| !Healing Stream Totem! | !Ancestor Chain Heal! |
| !Healing Rain! | !Ancestor Chain Heal! |
| !Healing Tide Totem! | !Ancestor Chain Heal! |
| !Flame Shock! | !Ancestor Lava Burst! |
| !Lightning Bolt! | !Ancestor Lava Burst! |
| !Lava Burst! | !Ancestor Lava Burst! |
| !Chain Lightning! | !Ancestor Chain Lightning! |