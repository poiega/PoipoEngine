// using random to get new id

// copied from server.js
function rndval(chars, length) {
    var result = '';
    var characters = chars;
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// moved from server.js (random only used here -> just delete)
const random = {
    choice(x) {
        switch (typeof (x)) {
            case 'string':
                return rndval(x, 1);
            case 'object':
                return x[Math.floor(Math.random() * x.length)];
        }
    }
};

function newID() {
    const a = [
        'A',
        'The',
    ];

    const b = [
        "Sleepy",
        "Giddy",
        "Smooth",
        'Beautiful',
        'Foamy',
        'Frightened',
        'Lazy',
        'Wonderful',
        'Happy',
        'Sad',
        'Broken',
        'Angry',
        'Mad',
        'Upset',
        'Red',
        'Blue',
        'Yellow',
        'Impossible',
        'Working',
        'Pretty',
        'Relaxed',
        'Cold',
        'Warm',
        'Hot',
        'Hard',
        'Loud',
        'Quiet',
        'New',
        'Old',
        'Clean',
        'Washable',
        'Open',
        'Closed',
        'Outdated',
        'Fixed',
        'Living',
        'Locked',
        'Unused',
        'Used',
        'Sold',
        'Sharp',
        'Smashed',
        'Crazy',
        'Free',
        'Fancy',
        'Ugly',
        'Big',
        'Small',
        'Fast',
        'Ugly',
        'Slow',
        'Dirty',
        'Unclassifiable',
        'Cloudy',
        'Solid',
        'Different',
        'Hungry',
        'Thirsty',
        'Boorish',
        'Funny',
        'Puffy',
        'Greasy',
        'Efficacious',
        'Functional',
        'Undesirable',
        'Naughty',
        'Gray',
        'Busy',
        'Acceptable',
        'Stormy',
        'Noisy',
    ];

    const c = [
        'And'
    ];

    const d = [
        "Station",
        "Discount",
        'Deer',
        "Soup",
        "Ice",
        "Recorder",
        "VPN",
        "Installer",
        "Uninstaller",
        "Bot",
        "Robot",
        "Power",
        "Point",
        "Music",
        'Event',
        'Cat',
        'Dog',
        'Phone',
        'Bush',
        'Music',
        'Picture',
        'Lion',
        'Angle',
        'Horse',
        'Mouse',
        'Pencil',
        'Box',
        'Bag',
        'Backpack',
        'Chicken',
        'CD',
        'DVD',
        'Diskette',
        'FloppyDisk',
        'Drive',
        'CPU',
        'Water',
        'Glass',
        'Memory',
        'USB',
        'Drive',
        'Number',
        'Letter',
        'Fan',
        'BIOS',
        'Video',
        'Button',
        'Trash',
        'Bottle',
        'Cylinder',
        'Ball',
        'Key',
        'Door',
        'Plug',
        'Flask',
        'Cable',
        'Radio',
        'File',
        'Disk',
        'Camera',
        'Titan',
        'Ash',
        'Tree',
        'Plank',
        'Script',
        'Day',
        'Car',
        'ATV',
        'Healer',
        'Fox',
        'Wolf',
        'Carrot',
        'Steak',
        'Mushroom',
        'Bandages',
        'Berry',
        'Tea',
        'Charcoal',
        'Limestone',
        'Iron',
        'Bar',
        'Nail',
        'Seed',
        'Fiber',
        'Leather',
        'Fur',
        'Aluminum',
        'Tungsten',
        'Transmission',
        'Wheel',
        'Fork',
        'Engine',
        'Transistor',
        'Plastic',
        'Wrench',
        'Gasoline',
        'Oil',
        'Pickaxe',
        'Hammer',
        'Campfire',
        'Garden',
        'Furnace',
        'Tower',
        'Houseplant',
        'Shirt',
        'Sneakers',
        'Helicopter',
        'Trap',
        'Card',
        'Jar',
        'Toy',
        'Jet',
        'Plane',
        'Statement',
        'Dimension',
        'Toothpaste',
        'Railway',
        'Year',
        'Stew',
        'Farm',
        'Zipper',
        'Horses',
        'Can',
        'Cabbage',
        'Eyes',
        'Motion',
        'Uncle',
        'Teeth',
        'Birthday',
        'Downtown',
    ];

    if (minor >= 17 || (minor == 16 && revision >= 1)) {
        pa = random.choice(b);
        pb = random.choice(b);
        pc = random.choice(b);
        pd = random.choice(d);

        if (pa == pb) pb = 'Soft';
        if (pa == pc) pc = 'Free';
        if (pb == pc) pc = 'Cold';
        return pa + pb + pc + pd;
    } else {
        pa = random.choice(a);
        pb = random.choice(b);
        pc = random.choice(c);
        pd = random.choice(b);
        pe = random.choice(d);
        if (['A', 'E', 'O', 'U', 'I'].includes(pb[0]) && pa == 'A')
            pa = 'An';
        if (pd == pb) pd = 'Soft';
        return pa + pb + pc + pd + pe;
    }
}
