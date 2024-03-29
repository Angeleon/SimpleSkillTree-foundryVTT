const powersVonnom = new Map([
	["WeaponName", "The Amulet of the Inquisitive"],
	["baseText", "The amulet seems the be designed entirely for the analytical, the scrutinizing and the searching."],
	["abilityText", ""],
	["ap0Name", "Sculpt Spells"],
	["ap11Name", "Improved Sculpt Spells"],
	["ap12Name", "Enhanced Sculpt Spells"],
	["ap13Name", "Supreme Sculpt Spells"],
	["ap0", "When casting an evocation spell the wielder may choose to spend a charge to create create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose up to two creatures. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save."],
	["ap11", "When casting an evocation spell the wielder may choose to spend a charge to create create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them up to or equal to your proficiency. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save."],
	["ap12", "When casting an evocation spell the wielder may choose to spend a charge to create create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to up to or equal your proficiency. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save. In addition you may choose to give a single creature disadvantage on this save."],
	["ap13", "When casting an evocation spell the wielder may choose to spend a charge to create create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to up to or equal your proficiency. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save. In addition you may choose to give up to your proficiency creatures disadvantage on this save. You may choose to spend more charges and increase the number for both parts of the ability with an addition proficiency number of creatures per charge."],
	["ap21Name", "Spell Storing"],
	["ap22Name", "Enhanced Spell Storing"],
	["ap23Name", "Superior Spell Storing"],
	["ap21", "This amulet stores spells cast into it, holding them until the attuned wearer uses them. A creature can cast a spell into it as the attuned wearer chooses to store them by choosing to spend spend charges equal to the level of the cast spell+1. It cannot contain more levels of spells than the charges can afford per day and the maximum level of a single spell stored is 6. While wearing this amulet, you can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. The spell cast from the amulet is no longer stored in it, freeing up space."],
	["ap22", "This amulet stores spells cast into it, holding them until the attuned wearer uses them. A creature can cast a spell into it as the attuned wearer chooses to store them by choosing to spend spend charges equal to the level of the cast spell. It cannot contain more levels of spells than the charges can afford per day and the maximum level of a single spell stored is 7. While wearing this amulet, you can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. The spell cast from the amulet is no longer stored in it, freeing up space."],
	["ap23", "This amulet stores spells cast into it, holding them until the attuned wearer uses them. A creature can cast a spell into it as the attuned wearer chooses to store them by choosing to spend spend charges equal to the level of the cast spell+1. It cannot contain more levels of spells than the charges can afford per day and the maximum level of a single spell stored is 7. While wearing this amulet, you can cast any spell stored in it. The spell uses the slot level, spell save DC, spell attack bonus, and spellcasting ability of the original caster, but is otherwise treated as if you cast the spell. The spell cast from the amulet is no longer stored in it, freeing up space. When casting a spell from the amulet that is a area of effect damage spell, the wearer may use the current level of Sculpt spells without using a charge and if the spell that targets only a single creatures that does not have the range of self, the wearer may pay another charge to target a second creature in range with the same spell."],
	["ap31Name", "Word of Bond"],
	["ap32Name", "Enhanced Word of Bond"],
	["ap33Name", "Boundless Word of Bond"],
	["ap31", "The attuned wearer may use an action to spend a charge to refill any of the abilities granted by Manifest Mind, with the action they may spend more than one charges to recharge several abilities or one several times."],
	["ap32", "The attuned wearer may use an action to spend a charge to refill any of the abilities granted by Manifest Mind, with the action they may spend more than one charges to recharge several abilities or one several times. Should the Manifest Mind somehow be destroyed or dispelled, the wearer may use their reaction and spend two charges to recover the Mind in its previous place."],
	["ap33", "The attuned wearer may use an action or a bonus action to spend a charge to refill any of the abilities granted by Manifest Mind, with the action they may spend more than one charges to recharge several abilities or one several times. Should the Manifest Mind somehow be destroyed or dispelled, the wearer may use their reaction and spend two charges to recover the Mind in its previous place or any place within 300 feet of the wearer. In addition, any time a charge is spend on Word of Bond, the wearer may choose to either move the Mind an additional 30 feet, increase the range of its bright and dim light by an additional 10 feet each, or make it invisible for the turn."],
	["pp0Name", ""],
	["pp1Name", "Inspired Intellect"],
	["pp2Name", "Enhanced Inspired Intellect"],
	["pp3Name", "Impressive Inspired Intellect"],
	["pp0", ""],
	["pp1", "The attuned wearer can prepare an additional 3 spells from their spelllist."],
	["pp2", "The attuned wearer can prepare an additional 6 spells from their spelllist."],
	["pp3", "The attuned wearer can prepare an additional 9 spells from their spelllist."],
	["ch0Name", "Charges"],
	["ch1Name", "Improved Charges"],
	["ch2Name", "Enhanced Charges"],
	["ch3Name", "Ultimate Charges"],
	["ch0", "The amulet contains three charge and it recovers 1 charge with a long rest."],
	["ch1", "The amulet contains five charge and it recovers 1d4+1 charges with a long rest."],
	["ch2", "The amulet contains seven charge and it recovers 1d6+1 charges with a long rest."],
	["ch3", "The amulet contains nine charge and it recovers 1d8+1 charges with a long rest."],
	["b0Name", "Bonus"],
	["b1Name", "Enhanced Bonus"],
	["b2Name", "Ultimate Bonus"],
	["b0", "When attuned and worn, this amulet gives +1d4 to all intelligence ability checks and you get a +1 bonus to your spell attacks and saving throws."],
	["b1", "When attuned and worn, this amulet gives +1d4 to all intelligence ability checks and you get a +2 bonus to your spell attacks and saving throws. In addition, whenever the wearer is trying to create something that uses intelligence, such as Alchemy, Scrolls or the like, the time and physical resources required is decreased by 15%, rounded down."],
	["b2", "When attuned and worn, this amulet gives +1d4 to all intelligence ability checks and you get a +3 bonus to your spell attacks and saving throws. In addition, whenever the wearer is trying to create something that uses intelligence, such as Alchemy, Scrolls or the like, the time and physical resources required is decreased by 15%, rounded down. When the wearer is casting a cantrip that deals damage, the wearer may reroll any ones, but must use the following roll."],
]);

const powersAlmar = new Map([
	["WeaponName", "The Adamant Adversary"],
	["baseText", ""],
	["abilityText", ""],
	["ap0Name", "Spatial Lock Shot"],
	["ap11Name", "Improved Spatial Lock Shot"],
	["ap12Name", "Enhanced Spatial Lock Shot"],
	["ap13Name", "Supreme Spatial Lock Shot"],
	["ap0", "When the attuned wielder takes the Attack action the wielder may choose to spend a charge to infuse the arrow with spatial locking power. The first creature the Adversary hits this round will become magically fixed in place by the arrow. The arrow will not move, even if it is defying gravity. The Arrow can hold up to 1000 pounds of weight. More weight causes the arrow to deactivate and vanish. A creature can use an action to make a DC 13 Strength check, moving the fixed arrow up to 10 feet on a success. If the creature is next to a wall, or prone, the DC becomes 16. The arrow lasts for one minute."],
	["ap11", "When the attuned wielder takes the Attack action the wielder may choose to spend a charge to infuse the arrow with spatial locking power. The first creature the Adversary hits this round will become magically fixed in place by the arrow. The arrow will not move, even if it is defying gravity. The Arrow can hold up to 2000 pounds of weight. More weight causes the arrow to deactivate and vanish. A creature can use an action to make a DC (8 + Proficiency + Wisdom Modifier) Strength check, moving the fixed arrow up to 10 feet on a success. If the creature is next to a wall, or prone, the DC becomes (11 + Proficiency + Wisdom Modifier). The arrow lasts for one minute."],
	["ap12", "When the attuned wielder takes the Attack action the wielder may choose to spend a charge to infuse the arrow with spatial locking power. The first creature the Adversary hits this round will become magically fixed in place by the arrow. The arrow will not move, even if it is defying gravity. The Arrow can hold up to 3000 pounds of weight. More weight causes the arrow to deactivate and vanish. A creature can use an action to make a DC (8 + Proficiency + Wisdom Modifier) Strength check, moving the fixed arrow up to 10 feet on a success. If the creature is next to a wall, or prone, the DC becomes (11 + Proficiency + Wisdom Modifier). The arrow lasts for one minute."],
	["ap13", "When the attuned wielder takes the Attack action the wielder may choose to spend a charge to infuse the arrow with spatial locking power. The first creature the Adversary hits this round will become magically fixed in place by the arrow. The arrow will not move, even if it is defying gravity. The Arrow can hold up to 5000 pounds of weight. More weight causes the arrow to deactivate and vanish. A creature can use an action to make a DC (8 + Proficiency + Wisdom Modifier) Strength check, moving the fixed arrow up to 10 feet on a success. If the creature is next to a wall, or prone, the DC becomes (11 + Proficiency + Wisdom Modifier). The arrow lasts for one minute and while the arrow is affixed to the target, the target cannot teleport."],
	["ap21Name", "Power Projectiles"],
	["ap22Name", "Enhanced Power Projectiles"],
	["ap23Name", "Empowered Power Projectiles"],
	["ap21", "When the attuned wielder takes the Attack action, the wielder may choose to spend a charge to change the damage type to one of the following for the reminder of the turn. Damage types available: Fire, Cold, Poison."],
	["ap22", "When the attuned wielder takes the Attack action, the wielder may choose to spend a charge to change the damage type to one of the following for the reminder of the turn. Damage types available: Fire, Cold, Poison, Thunder, Necrotic, Slashing."],
	["ap23", "When the attuned wielder takes the Attack action, the wielder may choose to spend a charge to change the damage type to one of the following for the reminder of the turn. Damage types available: Fire, Cold, Poison, Thunder, Necrotic, Slashing, Lightning, Radiant, Bludgeoning."],
	["ap31Name", "Adamant will"],
	["ap32Name", "Enhanced Adamant will"],
	["ap33Name", "Absolute Adamant will"],
	["ap31", "The attuned wielder can store a ranger spell in the weapon by using 1+(Spelllevel*2) charges. When releasing the spell with an action, the weapon will hold concentration for up to 1d6 rounds instead on the wielder. When the spell has been released, it is no longer in the weapon."],
	["ap32", "The attuned wielder can store a ranger spell in the weapon by using (Spelllevel*2) charges. When releasing the spell with an action or a bonus action, the weapon will hold concentration for up to 1d6+3 rounds instead on the wielder. When the spell has been released, it is no longer in the weapon."],
	["ap33", "The attuned wielder can store a ranger spell in the weapon by using (Spelllevel*2) charges. When releasing the spell with an action or a bonus action, the weapon will hold concentration for the full duration of the spell instead on the wielder. When the spell has been released, it is no longer in the weapon."],
	["pp0Name", ""],
	["pp1Name", "Bow Before Me"],
	["pp2Name", "Enhanced Bow Before Me"],
	["pp3Name", "Undeniable Bow Before Me"],
	["pp0", ""],
	["pp1", "The attuned wielder can use the bow as a melee weapon without disadvantage, getting all bonuses of the weapon except the active abilities. It counts as a two-handed finesse weapon and deals bludgeoning damage. The first time per round when a creature has been hit by this weapon, that creature gets disadvantage on opportunity attacks against the wielder for the turn."],
	["pp2", "The attuned wielder can use the bow as a melee weapon without disadvantage, getting all bonuses of the weapon except the active abilities. It counts as a finesse weapon and deals bludgeoning damage. Any creature hit by this weapon gets disadvantage on opportunity attacks until the start of its next turn and is unable to target the wielder with opportunity attacks for the turn."],
	["pp3", "The attuned wielder can use the bow as a melee weapon without disadvantage, getting all bonuses of the weapon except the active abilities. It counts as a finesse weapon and deals bludgeoning damage. Any creature hit by this weapon gets disadvantage on opportunity attacks until the start of its next turn and is unable to target the wielder with opportunity attacks for the turn. In addition, when the wielder is hit with a melee attack, the wielder can user their reaction to att their proficiency bonus to their AC for that attack, potentially causing the attack to miss."],
	["ch0Name", "Charges"],
	["ch1Name", "Improved Charges"],
	["ch2Name", "Enhanced Charges"],
	["ch3Name", "Ultimate Charges"],
	["ch0", "The amulet contains three charge and it recovers 1 charge with a long rest."],
	["ch1", "The amulet contains five charge and it recovers 1d4+1 charges with a long rest."],
	["ch2", "The amulet contains seven charge and it recovers 1d6+1 charges with a long rest."],
	["ch3", "The amulet contains nine charge and it recovers 1d8+1 charges with a long rest."],
	["b0Name", "Bonus"],
	["b1Name", "Enhanced Bonus"],
	["b2Name", "Ultimate Bonus"],
	["b0", "This bow does not require ammunition, but can fire arrows of pure magic that otherwise works exactly like normal arrows. In addition, the adversary provides a +1 bonus to attack and damage rolls made with it."],
	["b1", "This bow does not require ammunition, but can fire arrows of pure magic that otherwise works exactly like normal arrows. In addition, the adversary provides a +2 bonus to attack and damage rolls made with it. It can also work as a spellcasting focus for any class."],
	["b2", "This bow does not require ammunition, but can fire arrows of pure magic that otherwise works exactly like normal arrows. In addition, the adversary provides a +3 bonus to attack and damage rolls made with it. It can also work as a spellcasting focus for any class. The bow also deals an additional weapon die of damage on attacks."],
]);

const powersLoring = new Map([
	["WeaponName", "The Celestial Binding Talisman"],
	["baseText", "A coin with an inlaid gem exuding a faint glow that becomes a part of your Hexblade item whenever you manifest it."],
	["abilityText", ""],
	["ap0Name", "Moonlights End"],
	["ap11Name", "Improved Moonlights End"],
	["ap12Name", "Enhanced Moonlights End"],
	["ap13Name", "Magnificent Moonlights End"],
	["ap0", "An attuned wielder can take an action and spend a charge to shoot out a crescent of force that moves up to 30 feet in a line in the direction of the users choosing. Any creature in the path of your beam must make a DEX saving throw against your spell save DC or take damage equal to 2d6 + your charisma modifier. If successful, they take half that damage."],
	["ap11", "An attuned wielder can take an action and spend a charge to shoot out a crescent of force that moves up to 40 feet in a line in the direction of the users choosing. Any creature in the path of your beam must make a DEX saving throw against your spell save DC or take damage equal to 4d6 + your charisma modifier. If successful, they take half that damage."],
	["ap12", "An attuned wielder can take an action and spend a charge to shoot out a crescent of force that moves up to 50 feet in a line in the direction of the users choosing. Any creature in the path of your beam must make a DEX saving throw against your spell save DC or take damage equal to 6d6 + your charisma modifier. If successful, they take half that damage."],
	["ap13", "An attuned wielder can take an action and spend a charge to shoot out a crescent of force that moves up to 60 feet in a line in the direction of the users choosing. Any creature in the path of your beam must make a DEX saving throw against your spell save DC or take damage equal to 8d6 + your charisma modifier. If successful, they take half that damage."],
	["ap21Name", "Moonlit mind"],
	["ap22Name", "Enhanced Moonlit mind"],
	["ap23Name", "Superior Moonlit mind"],
	["ap21", "The attuned wearer may charge the talisman with spells up to a combined level of 3 by casting the chosen spell at the hex-blade and spending charges equivalent to the spell slot used. Once the spell has been imbued into the hex-blade, the attuned wearer may, by using the equivalent action, bonus-action, or reaction as the spell specified and spending the same charges once more, cast the selected spell. When casting another spell into the hex-blade, the wearer chooses which, if any, spells are replaced if the capacity is not sufficient."],
	["ap22", "The attuned wearer may charge the talisman with spells up to a combined level of 4 by casting the chosen spell at the hex-blade and spending charges equivalent to the spell slot used. Once the spell has been imbued into the hex-blade, the attuned wearer may, by using the equivalent action, bonus-action, or reaction as the spell specified and spending the same charges once more, cast the selected spell. When casting another spell into the hex-blade, the wearer chooses which, if any, spells are replaced if the capacity is not sufficient."],
	["ap23", "The attuned wearer may charge the talisman with spells up to a combined level of 6 by casting the chosen spell at the hex-blade and spending charges equivalent to the spell slot used. Once the spell has been imbued into the hex-blade, the attuned wearer may, by using the equivalent action, bonus-action, or reaction as the spell specified and spending the same charges once more, cast the selected spell. When casting another spell into the hex-blade, the wearer chooses which, if any, spells are replaced if the capacity is not sufficient."],
	["ap31Name", "Path of Redemption"],
	["ap32Name", "Enhanced Path of Redemption"],
	["ap33Name", "Ultimate Path of Redemption"],
	["ap31", "When an attuned wielder sees a creature within 60ft take damage, they may choose to use their reaction and spend a charge to transfer the damage to themselves. If they choose to do so, they deal an additional 1d6 damage on their next attack with their hex-weapon next turn."],
	["ap32", "When an attuned wielder sees a creature within 90ft take damage, they may choose to use their reaction and spend a charge to transfer the damage to themselves. If they choose to do so, they deal an additional 2d6 damage on their next attack with their hex-weapon next turn and they get advantage on the attack if the attacked creature is the source of the damage."],
	["ap33", "When an attuned wielder sees a creature within 90ft take damage, they may choose to use their reaction and spend a charge to transfer the damage to themselves. If they choose to do so, they deal an additional 3d6 damage on their next attack with their hex-weapon next turn, this attack also gains advantage on the attack and rolls three d20 for advantage instead of the normal two."],
	["pp0Name", "Radiant Repentance"],
	["pp1Name", "Superior Radiant Repentance"],
	["pp2Name", "Enhanced Radiant Repentance"],
	["pp3Name", "Resplendent Radiant Repentance"],
	["pp0", "The talisman gives +2 to concentration saving throws."],
	["pp1", "The talisman gives advantage to concentration saving throws and the when the target of their Hexblades Curse dies, the wielder can apply the curse to a different creature you can see within 30 feet of you, provided you aren’t incapacitated. When you apply the curse in this way, you don’t regain hit points from the death of the previously cursed creature. Once per long rest."],
	["pp2", "The talisman gives advantage to concentration saving throws and the when the target of their Hexblades Curse dies, the wielder can apply the curse to a different creature you can see within 30 feet of you, provided you aren’t incapacitated. When you apply the curse in this way, you don’t regain hit points from the death of the previously cursed creature. Once per long or short rest."],
	["pp3", "The talisman gives advantage to concentration saving throws and the when the target of their Hexblades Curse dies, the wielder can apply the curse to a different creature you can see within 30 feet of you, provided you aren’t incapacitated. When you apply the curse in this way, you don’t regain hit points from the death of the previously cursed creature."],
	["ch0Name", "Charges"],
	["ch1Name", "Improved Charges"],
	["ch2Name", "Enhanced Charges"],
	["ch3Name", "Ultimate Charges"],
	["ch0", "The talisman contains three charge and it recovers 1 charge with a long rest."],
	["ch1", "The talisman contains five charge and it recovers 1d4+1 charges with a long rest."],
	["ch2", "The talisman contains seven charge and it recovers 1d6+1 charges with a long rest."],
	["ch3", "The talisman contains nine charge and it recovers 1d8+1 charges with a long rest."],
	["b0Name", "Bonus"],
	["b1Name", "Enhanced Bonus"],
	["b2Name", "Ultimate Bonus"],
	["b0", "When attuned and worn, the talisman provides a +1 bonus to attack and damage rolls made with your hex-weapon."],
	["b1", "When attuned and worn, the talisman provides a +2 bonus to attack and damage rolls made with your hex-weapon. The hexblade will also function as a spell-focus for any class."],
	["b2", "When attuned and worn, the talisman provides a +3 bonus to attack and damage rolls made with your hex-weapon. The hexblade will also function as a spell-focus for any class. In addition, the hex-blade deals an additional 2d6 damage as a two-handed sword or maul, and an additional damage die in any other form."],
]);

const powersPeculiar = new Map([
	["WeaponName", "The Cauldron Blade"],
	["baseText", "A weapon made from a cauldron used as the altar of worship to the three-faced goddess, Hehrecitus, to avenge the souls lost in that senseless slaughter."],
	["abilityText", "In addition the The Cauldron blade has the following abilities:"],
	["ap0Name", "Spear of Hehrecitus"],
	["ap11Name", "Improved Spear of Hehrecitus"],
	["ap12Name", "Enhanced Spear of Hehrecitus"],
	["ap13Name", "Superior Spear of Hehrecitus"],
	["ap0", "When an attuned wielder sees another creature, within 60 feet cast a spell, the wielder may choose to use their reaction and spend a charge to throw this weapon at the creature. This attack deals an additional weapon dice of damage and returns to the wielders hand if it hits. If the attack misses, the weapon will fly an additional 1d10 feet beyond the target and will not return to the wielder. The user may use bonus action to return it to their hand"],
	["ap11", "The blade has the attribute Thrown (Range 30/90). When an attuned wielder sees another creature within 90 feet, cast a spell, the wielder may choose to use their reaction and a charge to throw this weapon at the creature. This attack deals an additional weapon dice of damage and returns to the wielders hand if it hits. If the attack misses, the weapon will fly an additional 1d10 feet beyond the target and will not return to the wielder. The user may use bonus action to return it to their hand"],
	["ap12", "The blade has the attribute Thrown (Range 60/120). When an attuned wielder sees another creature within 120 feet, cast a spell, the wielder may choose to use their reaction and a charge to throw this weapon at the creature. This attack deals an additional weapon dice of damage and returns to the wielders hand. The user may use bonus action to return it to their hand when thrown normally."],
	["ap13", "The blade has the attribute Thrown (Range 90/180). When an attuned wielder sees another creature within 180 feet, cast a spell, the wielder may choose to use their reaction and a charge to throw this weapon at the creature. This attack deals two additional weapon dice of damage. When thrown, the weapon always returns to the wielders hand unless otherwise specified by the wielder."],
	["ap21Name", "Tricks of the Starmother"],
	["ap22Name", "Enhanced Tricks of the Starmother"],
	["ap23Name", "Supreme Tricks of the Starmother"],
	["ap21", "The attuned wielder may take an action and cast one of the following spells by spending charges equal to the level of the spell: Arcane Lock, Grease."],
	["ap22", "The attuned wielder may take an action and cast one of the following spells by spending charges equal to the level of the spell: Arcane Lock, Grease, Immovable Object, Silence."],
	["ap23", "The attuned wielder may take an action and cast one of the following spells by spending charges equal to the level of the spell: Arcane Lock, Grease, Immovable Object, Silence, Hallucinary Terrain, Geas."],
	["ap31Name", "Mercy of Hehrecitus"],
	["ap32Name", "Enhanced Mercy of Hehrecitus"],
	["ap33Name", "Magnificent Mercy of Hehrecitus"],
	["ap31", "When using Spirit Shield, the attuned wielder may choose to spend a charge and grant any one friendly creature in the Shroud 1d10 temporary hp."],
	["ap32", "When using Spirit Shield, the attuned wielder may choose to spend a charge and grant any two friendly creature in the Shroud 1d12 temporary hp."],
	["ap33", "When using Spirit Shield, the attuned wielder may choose to spend a charge and grant any two friendly creature in the Shroud half of the negated damage as temporary hp.""],
	["pp0Name", "Wrath of the Coffin Woods"],
	["pp1Name", "Improved Wrath of the Coffin Woods"],
	["pp2Name", "Enhanced Wrath of the Coffin Woods"],
	["pp3Name", "Stunning Wrath of the Coffin Woods"],
	["pp0", "While you are raging, the spirits bound to this weapon rise and harass any hostile creatures in a 15ft radius. When a hostile creature starts it's turn in this area or moves into it for the first time on its turn, it must make a DC 13 Constitution saving throw, or take 1D6 Force damage. Any Undead creatures have disadvantage on this saving throw."],
	["pp1", "While you are raging, the spirits bound to this weapon rise and harass any hostile creatures in a 15ft radius. When a hostile creature starts it's turn in this area or moves into it for the first time on its turn, it must make a DC 8+CON modifier+proficiency Constitution saving throw, or take 1D8 Force damage. Any Undead creatures have disadvantage on this saving throw."],
	["pp2", "While you are raging, the spirits bound to this weapon rise and harass any hostile creatures in a 20ft radius. When a hostile creature starts it's turn in this area or moves into it for the first time on its turn, it must make a DC 8+CON modifier+proficiency Constitution saving throw, or take 1D10 Force damage. Any Undead creatures have disadvantage on this saving throw."],
	["pp3", "While you are raging, the spirits bound to this weapon rise and harass any hostile creatures in a 25ft radius. When a hostile creature starts it's turn in this area or moves into it for the first time on its turn, it must make a DC 8+CON modifier+proficiency Constitution saving throw, or take 1D12 Force damage. Any Undead creatures have disadvantage on this saving throw."],
	["ch0Name", "Charges"],
	["ch1Name", "Improved Charges"],
	["ch2Name", "Enhanced Charges"],
	["ch3Name", "Ultimate Charges"],
	["ch0", "The amulet contains three charge and it recovers 1 charge with a long rest."],
	["ch1", "The amulet contains five charge and it recovers 1d4+1 charges with a long rest."],
	["ch2", "The amulet contains seven charge and it recovers 1d6+1 charges with a long rest."],
	["ch3", "The amulet contains nine charge and it recovers 1d8+1 charges with a long rest."],
	["b0Name", "Bonus"],
	["b1Name", "Enhanced Bonus"],
	["b2Name", "Ultimate Bonus"],
	["b0", "When attuned and wielded, the blade has a +1 bonus to attack and damage rolls made with it."],
	["b1", "When attuned and wielded, the blade has a +2 bonus to attack and damage rolls made with it. The wielder can reroll up to proficiency number of hit-dice when resting per long rest."],
	["b2", "When attuned and wielded, the blade has a +3 bonus to attack and damage rolls made with it. The wielder can reroll up to proficiency number of hit-dice when resting per long rest. The blade also deals an additional damage dice with any attack made with it."],
]);

export powersVonnom;
export powersAlmar;
export powersLoring;
export powersPeculiar;