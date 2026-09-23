---
url: "How-to-Set-Up-a-Professional-AVR-Development-Environment-in-VS-Code"
title: "كيف اقوم بإعداد بيئة تطوير احترافية لـمتحكمات AVR في VS Code"
date: "2026-02-10T12:00:00+03:00"
description: "دليل للمطورين لإعداد بيئة تطوير احترافية لـمتحكمات AVR في VS Code"
author: "Bassam Ahmad"
tags: ["تطوير", "AVR", "متحكمات صغرية", "VS Code", "أنظمة مدمجة"]
image: {
  url: "/images/avr-with-vscode.webp",
  alt: "صورة الغلاف: شاشة حاسب تظهر VS Code و Arduino IDE"
}
---
# كيف اقوم بإعداد بيئة تطوير احترافية لـمتحكمات AVR في VS Code

![صورة الغلاف: شاشة حاسب تظهر VS Code و Arduino IDE](/images/avr-with-vscode.webp)

---

## مقدمة: لماذا يجب عليك التحول؟

إذا كنت تبرمج متحكمات AVR الدقيقة باستخدام Arduino IDE، فمن المحتمل أنك واجهت ذلك الحاجز المحبط حيث البساطة التي كانت تشعرك بالحرية أصبحت الآن تشعرك بالتقييد. أنت تكتب مشاريع متعددة الملفات، لكن البيئة التطويرية تتعامل مع كل شيء كـ sketch واحد. أنت تقوم بالتصحيح عن طريق وميض الـ LEDs والطباعة التسلسلية لأنه لا يوجد مصحح أخطاء حقيقي.

حان الوقت للارتقاء بمستواك.

الانتقال إلى بيئة تطوير احترافية مثل Visual Studio Code ليس مجرد الحصول على محرر أكثر أناقة - بل يتعلق بتبني سير العمل التي يستخدمها مهندسو الأنظمة المدمجة المحترفون كل يوم. إليك ما ستكسبه:

**قدرات تصحيح متقدمة**
نقاط توقف حقيقية. فحص المتغيرات. التنفيذ خطوة بخطوة. مع التكامل الصحيح لـ GDB، لن تعود أبدًا للتصحيح عبر شفرة مورس بالـ LED.

**تنقل أفضل في الكود وIntelliSense**
الانتقال إلى التعريفات، إيجاد جميع المراجع، الإكمال التلقائي الذكي الذي يفهم فعليًا سجلات AVR وأقنعة البتات الخاصة بك. IntelliSense في VS Code، عند تكوينه بشكل صحيح، يشعرك وكأن لديك ورقة البيانات مفتوحة في رأسك.

**تكامل Git والتحكم في الإصدار**
توقف عن تسمية الملفات `main_v2_final.c`. التحكم المناسب في الإصدار مدمج مباشرة في VS Code، مما يجعل التعاون وتاريخ المشروع أمرًا بسيطًا.

**تنظيم المشاريع متعددة الملفات**
قم بهيكلة الكود الخاص بك كمحترف: وحدات منفصلة، ملفات رأسية، مكتبات. لا مزيد من sketches بطول 1000 سطر التي تجعلك ترغب في البكاء.

**مرونة نظام البناء**
فهم والتحكم في كل خطوة من خطوات الترجمة. تخصيص علامات التحسين. ربط المكتبات الخارجية. استخدام Makefiles أو أنظمة البناء الحديثة.

**ممارسات معيارية في الصناعة**
المهارات التي تطورها هنا تنتقل مباشرة إلى تطوير الأنظمة المدمجة الاحترافي، سواء انتهى بك الأمر للعمل على ARM Cortex-M أو PIC أو أي عائلة متحكمات دقيقة أخرى.

### من يجب عليه قراءة هذا الدليل؟

هذا الدليل مناسب لك إذا:
- كنت مرتاحًا مع C/C++ وتفهم المفاهيم المدمجة الأساسية (السجلات، المقاطعات، الأجهزة الطرفية)
- تجاوزت قيود Arduino IDE
- تريد فهم ما يحدث تحت الغطاء، وليس فقط استخدام وظائف سحرية
- تستعد لمهنة في الأنظمة المدمجة
- أنت مهندس مبتدئ تقوم بإعداد بيئة التطوير الاحترافية الأولى

إذا كنت لا تزال تتعلم أساسيات المتحكمات الدقيقة، التزم بـ Arduino IDE في الوقت الحالي - إنها منصة تعليمية ممتازة. عد عندما تكون مستعدًا لفهم سلسلة الأدوات الكاملة.

---

## الجدل الكبير: الإعداد اليدوي مقابل PlatformIO

قبل أن نتعمق، تواجه قرارًا حاسمًا: اذهب يدويًا مع AVR-GCC أو تبنى نظام PlatformIO البيئي. كلاهما خيارات احترافية صالحة، ويجب أن يتماشى قرارك مع أهدافك.

### الخيار أ: إعداد AVR-GCC + avrdude يدويًا

**الإيجابيات:**
- **التحكم الكامل**: أنت تدير كل جانب من جوانب سلسلة أدواتك، من علامات المترجم إلى نصوص الربط
- **الحد الأدنى من التبعيات**: قم بتثبيت ما تحتاجه فقط، لا أكثر
- **فهم عميق**: عندما تقوم بتكوين عملية البناء يدويًا، فإنك تفهم حقًا ما يحدث في كل خطوة
- **معرفة قابلة للنقل**: هذه المهارات تنطبق على أي عائلة متحكمات دقيقة - ARM أو PIC أو RISC-V، أيًا كانت
- **خفيف الوزن**: دليل المشروع الخاص بك يبقى نظيفًا وبسيطًا

**السلبيات:**
- **التكوين اليدوي**: أنت المسؤول عن إعداد مسارات التضمين وعلامات المترجم ونصوص البناء
- **منحنى تعليمي أكثر حدة**: المزيد من التكوين يعني المزيد من التعلم مقدمًا
- **إدارة التبعيات**: عندما تحتاج إلى مكتبة، فأنت تبحث عنها وتدمجها بنفسك
- **المزيد من العمل على سطر الأوامر**: مرتاح مع الطرفيات؟ عظيم. إذا لم تكن كذلك، استعد لتصبح مرتاحًا.

### الخيار ب: امتداد PlatformIO

**الإيجابيات:**
- **تثبيت بنقرة واحدة**: قم بتثبيت الامتداد، انتظر بضع دقائق، وأنت جاهز للبرمجة
- **إدارة تلقائية للتبعيات**: المكتبات تُثبَّت بأمر واحد
- **تكوين مسبق لمئات اللوحات**: من ATtiny إلى ESP32، يعرفها جميعًا
- **واجهة موحدة**: اعمل مع AVR اليوم، ARM غدًا، ESP32 الأسبوع القادم - نفس سير العمل
- **أدوات متكاملة**: شاشة تسلسلية، مُحمِّل، مدير مكتبات، كلها مدمجة
- **نظام بناء حديث**: قائم على CMake، يدعم هياكل المشاريع المعقدة دون عناء

**السلبيات:**
- **طبقة التجريد**: بعض التفاصيل مخفية، مما قد يكون محبطًا عند استكشاف الأخطاء
- **بصمة أكبر**: يثبت Python وسلاسل أدوات كاملة وتبعيات كبيرة
- **تحكم أقل في الإصدار**: من الصعب تحديد إصدارات سلسلة الأدوات بالضبط لإنشاءات قابلة للتكرار
- **عامل "السحر"**: لأولئك الذين يريدون فهم الأساسيات، قد تبدو الراحة كصندوق أسود

### توصيتنا

**اختر الإعداد اليدوي إذا:**
- تريد فهمًا عميقًا لعملية البناء المدمجة
- تعمل على أنظمة محدودة الموارد أو لديك مساحة قرص محدودة
- تحتاج إلى تحكم دقيق في إصدارات المترجم والعلامات
- تدرس الأنظمة المدمجة أكاديميًا
- تنتقل إلى التطوير الاحترافي المباشر للمعدن

**اختر PlatformIO إذا:**
- تريد البدء في البرمجة فورًا دون متاعب سلسلة الأدوات
- تعمل مع منصات متحكمات دقيقة متعددة (AVR، ARM، ESP32، إلخ.)
- تفضل سير العمل الحديثة القائمة على الرأي
- تقوم ببناء مشاريع تحتاج إلى العديد من مكتبات الطرف الثالث
- تقدر النماذج الأولية السريعة على فهم كل التفاصيل

لا يوجد اختيار "خاطئ". بدأت بإعدادات يدوية لفهم العملية حقًا، ثم انتقلت إلى PlatformIO للعمل الإنتاجي. العديد من المحترفين يستخدمون كليهما: يدوي للتعلم وعمل Linux المدمج، PlatformIO لتطوير البرامج الثابتة السريع.

يغطي هذا الدليل كلا النهجين بشكل شامل. اختر مسارك، أو الأفضل من ذلك، جرب كليهما وشاهد أي سير عمل يناسبك.

---

## المتطلبات الأساسية ومتطلبات النظام

قبل أن نبدأ، تأكد من أن لديك:

**البرمجيات:**
- **Visual Studio Code** مثبت (قم بالتنزيل من [code.visualstudio.com](https://code.visualstudio.com))
- **إلمام أساسي بسطر الأوامر** (فتح الطرفيات، تشغيل الأوامر، فهم المسارات)

**الأجهزة:**
- **مبرمج USB**: USBasp، Arduino as ISP، Atmel-ICE، أو ما شابه
  - USBasp رخيص (~5 دولارات) ومتوافق على نطاق واسع - موصى به للمبتدئين
  - Arduino as ISP يعمل إذا كان لديك لوحة Arduino إضافية
- **متحكم AVR دقيق مستهدف**: سنستخدم ATmega328P كمرجع (نفس الشريحة في Arduino Uno)
- **كابل USB** لتوصيل المبرمج بالكمبيوتر
- **إعداد لوحة تجارب أساسي** (اختياري ولكن موصى به للاختبار)

**المعرفة:**
- مرتاح في قراءة أوراق بيانات AVR (على الأقل أوصاف السجلات)
- فهم برمجة C (المؤشرات، الهياكل، معالجة البتات)
- إلكترونيات أساسية (تعرف ما هو مقاوم السحب)

**ملاحظات خاصة بالمنصة:**
- **Windows**: قد تحتاج إلى تثبيت برامج تشغيل USBasp باستخدام Zadig
- **Linux**: ستحتاج إلى قواعد udev لتجنب استخدام `sudo` للبرمجة (سنغطي هذا)
- **macOS**: Homebrew يجعل التثبيت أكثر سلاسة

---

## الطريقة 1: إعداد AVR-GCC اليدوي (الغوص العميق)

هذا هو طريق الفهم. سنقوم بتثبيت سلسلة أدوات AVR يدويًا، وتكوين VS Code للإكمال الذكي للكود، وإعداد نظام بناء من الصفر. بحلول النهاية، ستفهم كل خطوة من ملف `.c` المصدري إلى ملف `.hex` المُحمَّل.

### الخطوة 1: تثبيت سلسلة أدوات AVR

تتكون سلسلة أدوات AVR من ثلاثة مكونات حرجة:
1. **avr-gcc**: المترجم الذي يترجم كود C الخاص بك إلى كود آلة AVR
2. **avr-libc**: وظائف مكتبة C القياسية المعدلة لمتحكمات AVR الدقيقة
3. **avrdude**: المُحمِّل الذي ينقل الكود المترجم إلى الشريحة

#### تثبيت Windows

1. قم بتنزيل سلسلة أدوات AVR-GCC من [موقع Microchip](https://www.microchip.com/en-us/tools-resources/develop/microchip-studio/gcc-compilers) أو استخدم [WinAVR](http://winavr.sourceforge.net/) (أقدم ولكن مستقر)
2. قم بالاستخراج إلى مسار **بدون مسافات** (حاسم!): `C:\AVR\avr-gcc-14.1.0-x64-windows\`
3. أضف دليل `bin` إلى PATH الخاص بك:
   - افتح خصائص النظام ← متغيرات البيئة
   - قم بتحرير متغير `Path`
   - أضف: `C:\AVR\avr-gcc-14.1.0-x64-windows\bin`
   - [لقطة شاشة: تكوين PATH في Windows يظهر دليل AVR bin]

4. تحقق من التثبيت:
```bash
avr-gcc --version
avrdude -?
```

#### تثبيت Linux

مستخدمو Ubuntu/Debian لديهم الأسهل:
```bash
sudo apt-get update
sudo apt-get install gcc-avr avr-libc avrdude
```

تحقق:
```bash
avr-gcc --version
# يجب أن يظهر: avr-gcc (GCC) 5.4.0 أو أحدث
```

**إعداد قواعد udev (مهم!):**
أنشئ `/etc/udev/rules.d/99-usbasp.rules`:
```bash
# USBasp programmer
SUBSYSTEM=="usb", ATTR{idVendor}=="16c0", ATTR{idProduct}=="05dc", MODE="0666"
```

أعد تحميل القواعد:
```bash
sudo udevadm control --reload-rules
sudo udevadm trigger
```

#### تثبيت macOS

باستخدام Homebrew:
```bash
brew tap osx-cross/avr
brew install avr-gcc avrdude
```

تُثبَّت سلسلة الأدوات في `/usr/local/bin` (موجود بالفعل في PATH).

تحقق:
```bash
avr-gcc --version
```

### الخطوة 2: تكوين IntelliSense في VS Code

IntelliSense هو نظام ذكاء الكود في VS Code - الإكمال التلقائي، كشف الأخطاء، الانتقال إلى التعريف، والمزيد. لتطوير AVR، نحتاج إلى إخباره أين يجد رؤوس AVR وأي متحكم دقيق نستهدفه.

**تثبيت امتداد C/C++:**
1. افتح VS Code
2. اضغط `Ctrl+Shift+X` (عرض الامتدادات)
3. ابحث عن "C/C++" من Microsoft
4. ثبّت

**تكوين IntelliSense:**
1. افتح مجلد مشروعك في VS Code
2. اضغط `Ctrl+Shift+P` (لوحة الأوامر)
3. اكتب واختر: `C/C++: Edit Configurations (JSON)`
4. هذا ينشئ `.vscode/c_cpp_properties.json`

**مثال على التكوين لـ Windows:**
```json
{
    "configurations": [
        {
            "name": "AVR",
            "includePath": [
                "${workspaceFolder}/**",
                "C:/AVR/avr-gcc-14.1.0-x64-windows/avr/include",
                "C:/AVR/avr-gcc-14.1.0-x64-windows/lib/gcc/avr/14.1.0/include"
            ],
            "defines": [
                "__AVR_ATmega328P__",
                "F_CPU=16000000UL"
            ],
            "compilerPath": "C:/AVR/avr-gcc-14.1.0-x64-windows/bin/avr-gcc.exe",
            "cStandard": "c11",
            "cppStandard": "c++17",
            "intelliSenseMode": "gcc-x64"
        }
    ],
    "version": 4
}
```

**لـ Linux:**
```json
{
    "configurations": [
        {
            "name": "AVR",
            "includePath": [
                "${workspaceFolder}/**",
                "/usr/lib/avr/include"
            ],
            "defines": [
                "__AVR_ATmega328P__",
                "F_CPU=16000000UL"
            ],
            "compilerPath": "/usr/bin/avr-gcc",
            "cStandard": "c11",
            "cppStandard": "c++17",
            "intelliSenseMode": "gcc-x64"
        }
    ],
    "version": 4
}
```

**لـ macOS:**
```json
{
    "configurations": [
        {
            "name": "AVR",
            "includePath": [
                "${workspaceFolder}/**",
                "/usr/local/Cellar/avr-gcc@*/*/avr/include"
            ],
            "defines": [
                "__AVR_ATmega328P__",
                "F_CPU=16000000UL"
            ],
            "compilerPath": "/usr/local/bin/avr-gcc",
            "cStandard": "c11",
            "cppStandard": "c++17",
            "intelliSenseMode": "gcc-x64"
        }
    ],
    "version": 4
}
```

**ملاحظات التكوين الحاسمة:**
- `includePath`: حيث يبحث VS Code عن ملفات الرؤوس. اضبط المسارات لتتناسب مع تثبيتك.
- `__AVR_ATmega328P__`: يخبر IntelliSense أي شريحة تستخدمها. قم بالتغيير لـ AVR مختلفة (مثل `__AVR_ATtiny85__`)
- `F_CPU`: تردد الساعة الخاص بك. قم بالتغيير إذا كنت تستخدم بلورة مختلفة أو مذبذب داخلي.

بعد الحفظ، يجب أن يعمل IntelliSense! اكتب `#include <avr/io.h>` ويجب أن يقترح الإكمال التلقائي رؤوس خاصة بـ AVR.

### الخطوة 3: إنشاء نظام بناء Makefile

تُعرِّف Makefiles كيفية ترجمة مشروعك. إليك قالب احترافي مع تعليقات جيدة:

**أنشئ `Makefile` في جذر مشروعك:**
```makefile
# MCU Configuration
MCU = atmega328p
F_CPU = 16000000UL
PROGRAMMER = usbasp

# Project Configuration
TARGET = main
SRC = main.c
# Add more source files: SRC = main.c uart.c spi.c

# Compiler Settings
CC = avr-gcc
OBJCOPY = avr-objcopy
SIZE = avr-size
AVRDUDE = avrdude

# Compiler Flags
CFLAGS = -mmcu=$(MCU) -DF_CPU=$(F_CPU) -Os -Wall -Wextra -std=gnu99
CFLAGS += -funsigned-char -funsigned-bitfields -fpack-struct -fshort-enums
CFLAGS += -ffunction-sections -fdata-sections
LDFLAGS = -Wl,--gc-sections

# Build Directory
BUILD_DIR = build

# Object Files
OBJ = $(SRC:%.c=$(BUILD_DIR)/%.o)

# Default Target
all: $(BUILD_DIR) $(BUILD_DIR)/$(TARGET).hex size

# Create Build Directory
$(BUILD_DIR):
	mkdir -p $(BUILD_DIR)

# Compile C files to object files
$(BUILD_DIR)/%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

# Link object files to ELF
$(BUILD_DIR)/$(TARGET).elf: $(OBJ)
	$(CC) $(CFLAGS) $(LDFLAGS) $^ -o $@

# Create HEX file from ELF
$(BUILD_DIR)/$(TARGET).hex: $(BUILD_DIR)/$(TARGET).elf
	$(OBJCOPY) -O ihex -R .eeprom $< $@

# Show size information
size: $(BUILD_DIR)/$(TARGET).elf
	$(SIZE) --format=avr --mcu=$(MCU) $<

# Upload to MCU
upload: $(BUILD_DIR)/$(TARGET).hex
	$(AVRDUDE) -c $(PROGRAMMER) -p $(MCU) -U flash:w:$<:i

# Clean build artifacts
clean:
	rm -rf $(BUILD_DIR)

# Declare phony targets
.PHONY: all size upload clean
```

**استخدام Makefile:**
```bash
# ترجم مشروعك
make

# رفع إلى المتحكم الدقيق
make upload

# تنظيف ملفات البناء
make clean
```

**فهم علامات المترجم الرئيسية:**
- `-Os`: تحسين للحجم (حاسم لذاكرة AVR الصغيرة)
- `-Wall -Wextra`: تمكين جميع التحذيرات (اصطياد الأخطاء المحتملة)
- `-mmcu=atmega328p`: استهداف متحكم دقيق محدد
- `-ffunction-sections -fdata-sections`: السماح بإزالة الكود غير المستخدم
- `-Wl,--gc-sections`: إزالة الوظائف غير المستخدمة في وقت الربط (يوفر الفلاش)

### الخطوة 4: إعداد مهام VS Code

تتيح لك مهام VS Code الترجمة والرفع مباشرة من المحرر.

**أنشئ `.vscode/tasks.json`:**
```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Build AVR Project",
            "type": "shell",
            "command": "make",
            "group": {
                "kind": "build",
                "isDefault": true
            },
            "problemMatcher": {
                "owner": "cpp",
                "fileLocation": ["relative", "${workspaceFolder}"],
                "pattern": {
                    "regexp": "^(.*):(\\d+):(\\d+):\\s+(warning|error):\\s+(.*)$",
                    "file": 1,
                    "line": 2,
                    "column": 3,
                    "severity": 4,
                    "message": 5
                }
            }
        },
        {
            "label": "Upload to AVR",
            "type": "shell",
            "command": "make upload",
            "dependsOn": ["Build AVR Project"],
            "problemMatcher": []
        },
        {
            "label": "Clean Build",
            "type": "shell",
            "command": "make clean",
            "problemMatcher": []
        }
    ]
}
```

**استخدام المهام:**
- اضغط `Ctrl+Shift+B` (مهمة البناء الافتراضية) ← يترجم مشروعك
- اضغط `Ctrl+Shift+P` ← "Run Task" ← "Upload to AVR"
- تظهر أخطاء البناء في لوحة "Problems" مع مواقع الملفات القابلة للنقر

### الخطوة 5: برنامجك الأول

**أنشئ `main.c`:**
```c
#define F_CPU 16000000UL  // ساعة 16 ميجاهرتز

#include <avr/io.h>
#include <util/delay.h>

int main(void) {
    // اضبط Pin 13 (PB5 على ATmega328P) كخرج
    DDRB |= (1 << PB5);
    
    while (1) {
        // تبديل LED
        PORTB ^= (1 << PB5);
        _delay_ms(500);
    }
    
    return 0;
}
```

**البناء والرفع:**
```bash
make
make upload
```

إذا ومض LED الخاص بك، تهانينا! لقد قمت للتو بترجمة ورفع كود AVR من VS Code بدون Arduino IDE.

---

## الطريقة 2: إعداد PlatformIO (الطريق السريع)

يلف PlatformIO كل التعقيد في امتداد واحد. مثالي إذا كنت تريد كتابة الكود، وليس تكوين سلاسل الأدوات.

### الخطوة 1: تثبيت PlatformIO

1. افتح VS Code
2. اضغط `Ctrl+Shift+X` (الامتدادات)
3. ابحث عن "PlatformIO IDE"
4. انقر فوق تثبيت
5. انتظر التثبيت (ينزل ~500 ميجابايت من سلاسل الأدوات والأطر)
6. أعد تشغيل VS Code

سترى أيقونة PlatformIO في الشريط الجانبي الأيسر (رأس غريب).

### الخطوة 2: إنشاء مشروعك الأول

1. انقر على أيقونة PlatformIO ← "New Project"
2. املأ التفاصيل:
   - **الاسم**: `blink_led`
   - **اللوحة**: ابحث واختر "Arduino Uno" (أو لوحتك المحددة)
   - **الإطار**: Arduino (أو "None" لـ AVR-GCC النقي)
3. انقر فوق "Finish"

ينشئ PlatformIO هذا الهيكل:
```
blink_led/
├── .pio/               # قطع بناء (مُنشأة تلقائيًا)
├── include/            # ملفات الرؤوس
├── lib/                # مكتبات خاصة بالمشروع
├── src/
│   └── main.c         # ملفك المصدري الرئيسي
├── test/              # اختبارات الوحدة
└── platformio.ini     # تكوين المشروع
```

### الخطوة 3: تكوين platformio.ini

**لإطار Arduino (الأسهل):**
```ini
[env:uno]
platform = atmelavr
board = uno
framework = arduino
upload_protocol = usbasp
upload_speed = 19200

; إعدادات الشاشة
monitor_speed = 9600
```

**لـ AVR النقي (بدون مكتبات Arduino):**
```ini
[env:atmega328p]
platform = atmelavr
board = ATmega328P
framework = 

; تردد الساعة
board_build.f_cpu = 16000000L

; المبرمج
upload_protocol = usbasp
upload_flags = 
    -B5

; إعدادات الصمامات (اختياري)
board_fuses.lfuse = 0xFF
board_fuses.hfuse = 0xDE
board_fuses.efuse = 0xFD

; علامات المترجم
build_flags = 
    -Os
    -Wall
    -Wextra
```

**متقدم: بيئات متعددة**
```ini
[platformio]
default_envs = uno

[env:uno]
platform = atmelavr
board = uno
framework = arduino
upload_protocol = usbasp

[env:atmega328p_bare]
platform = atmelavr
board = ATmega328P
board_build.f_cpu = 16000000L
upload_protocol = usbasp
build_flags = -Os -Wall
```

### الخطوة 4: كتابة برنامجك الأول

**إطار Arduino (`src/main.cpp`):**
```cpp
#include <Arduino.h>

void setup() {
    pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
    digitalWrite(LED_BUILTIN, HIGH);
    delay(500);
    digitalWrite(LED_BUILTIN, LOW);
    delay(500);
}
```

**AVR النقي (`src/main.c`):**
```c
#include <avr/io.h>
#include <util/delay.h>

int main(void) {
    DDRB |= (1 << PB5);  // اضبط PB5 كخرج
    
    while (1) {
        PORTB ^= (1 << PB5);
        _delay_ms(500);
    }
    
    return 0;
}
```

### الخطوة 5: البناء والرفع

**استخدام شريط أدوات PlatformIO:**
- ✓ (علامة صح): بناء
- → (سهم): رفع
- 🗑️ (سلة مهملات): تنظيف
- 🔌 (قابس): شاشة تسلسلية

**استخدام لوحة الأوامر (`Ctrl+Shift+P`):**
- "PlatformIO: Build"
- "PlatformIO: Upload"
- "PlatformIO: Upload and Monitor"

**استخدام الطرفية:**
```bash
pio run              # بناء
pio run -t upload    # رفع
pio run -t clean     # تنظيف
```

### الخطوة 6: فهم إخراج PlatformIO

بعد البناء، سترى:
```
RAM:   [=         ]   1.2% (used 24 bytes from 2048 bytes)
Flash: [          ]   2.5% (used 812 bytes from 32256 bytes)
```

---

## ميزات متقدمة لكلا الطريقتين

### التصحيح مع simavr

التصحيح الحقيقي مع نقاط التوقف ممكن باستخدام simavr (محاكي AVR) أو مصححات أجهزة.

**تثبيت simavr (Linux):**
```bash
sudo apt-get install simavr
```

**سير عمل التصحيح الأساسي:**
1. ترجم برموز التصحيح: `-g`
2. شغل simavr: `simavr -g -m atmega328p firmware.elf`
3. في طرفية أخرى، اتصل بـ GDB: `avr-gdb firmware.elf`
4. في GDB: `target remote :1234`
5. اضبط نقاط التوقف: `break main`
6. شغّل: `continue`

لـ PlatformIO، قم بتكوين `platformio.ini`:
```ini
debug_tool = simavr
debug_init_break = tbreak main
```

ثم اضغط F5 لبدء التصحيح!

### تكامل التحكم في الإصدار

أنشئ `.gitignore`:
```
# قطع البناء
*.o
*.elf
*.hex
*.map
*.lst
*.eep
*.lss

# PlatformIO
.pio/
.vscode/.browse.c_cpp.db*
.vscode/c_cpp_properties.json
.vscode/launch.json

# ملفات نظام التشغيل
.DS_Store
Thumbs.db
```

**اعمل commit لهذه الملفات:**
- الكود المصدري (`.c`، `.h`)
- `platformio.ini` أو `Makefile`
- `.vscode/tasks.json`
- `.vscode/c_cpp_properties.json` (إذا كنت تستخدم الإعداد اليدوي)

### امتدادات VS Code الأساسية

**Serial Monitor** (`ms-vscode.vscode-serial-monitor`):
- قراءة/كتابة البيانات التسلسلية مباشرة في VS Code
- أفضل من شاشة Arduino IDE

**Hex Editor** (`ms-vscode.hexeditor`):
- عرض ملفات `.hex` و`.elf` بصريًا
- مفيد لتحليل تخطيط الذاكرة

**Error Lens** (`usernamehw.errorlens`):
- يظهر أخطاء المترجم في سطور الكود مباشرة
- يقلل من الذهاب والإياب مع إخراج البناء

**Include Autocomplete** (`ajshort.include-autocomplete`):
- إكمال تلقائي أفضل لعبارات `#include`

---

## استكشاف الأخطاء الشائعة

### "avr-gcc: command not found"

**التشخيص:** متغير بيئة PATH لا يتضمن سلسلة أدوات AVR.

**الإصلاح:**
- **Windows**: تحقق من أن `C:\AVR\...\bin` في PATH النظام، أعد تشغيل الطرفية
- **Linux**: قم بتشغيل `which avr-gcc` للعثور على مسار التثبيت، أضف إلى `~/.bashrc`: `export PATH=$PATH:/usr/bin`
- **macOS**: Homebrew يجب أن يتعامل مع هذا تلقائيًا؛ جرب `brew doctor`

### IntelliSense يظهر خطوطًا حمراء متموجة لكن الكود يترجم

**التشخيص:** `c_cpp_properties.json` غير مكوّن بشكل صحيح.

**الإصلاح:**
1. تحقق من أن `includePath` يشير إلى دليل تضمين AVR الفعلي
2. تحقق من أن `defines` يتضمن `__AVR_ATmega328P__` (أو شريحتك)
3. أعد تشغيل VS Code: `Ctrl+Shift+P` ← "Reload Window"

### فشل الرفع: "Device not found" أو رفض الإذن

**التشخيص:** المبرمج غير متصل أو مشكلة في برنامج التشغيل/الإذن.

**الإصلاح:**
- **Windows**: ثبّت برامج تشغيل USBasp باستخدام [Zadig](https://zadig.akeo.ie/)
- **Linux**: تحقق من قواعد udev (انظر قسم تثبيت Linux)
  ```bash
  lsusb | grep -i usb  # تحقق من ظهور المبرمج
  sudo avrdude -c usbasp -p m328p  # اختبر مع sudo
  ```
- **macOS**: عادة يعمل مباشرة؛ تحقق مع `system_profiler SPUSBDataType`

### الكود يعمل بشكل مختلف عما هو متوقع

**التشخيص:** عدم تطابق سرعة الساعة أو بتات الصمامات غير صحيحة.

**الإصلاح:**
1. تحقق من أن `F_CPU` يتطابق مع الساعة الفعلية:
   - معظم شرائح ATmega328P: 16 ميجاهرتز مع بلورة خارجية
   - الشرائح الفارغة: مذبذب داخلي 1 ميجاهرتز (افتراضي)
2. تحقق من بتات الصمامات:
   ```bash
   avrdude -c usbasp -p m328p -U lfuse:r:-:h
   ```
   لبلورة خارجية 16 ميجاهرتز، يجب أن يكون الصمام المنخفض `0xFF`

### PlatformIO عالق على "Resolving dependencies"

**التشخيص:** مشكلة في الشبكة أو ذاكرة تخزين مؤقت تالفة.

**الإصلاح:**
```bash
# مسح ذاكرة التخزين المؤقت لـ PlatformIO
pio system prune --force

# إعادة بناء المشروع
pio run --target clean
pio run
```

---

## الخاتمة: أنت الآن محترف

تهانينا! لقد تجاوزت قيود Arduino IDE وانضممت إلى صفوف مطوري الأنظمة المدمجة المحترفين. لديك الآن:

✅ **بيئة تطوير مناسبة** مع IntelliSense حقيقي وقدرات تصحيح والتحكم في الإصدار
✅ **فهم لسلسلة الأدوات** من الكود المصدري إلى البرنامج الثابت المُحمَّل
✅ **سير عمل احترافي** يُستخدم في الصناعة كل يوم
✅ **مهارات تنتقل** إلى أي عائلة متحكمات دقيقة أو منصة مدمجة
✅ **الأساس** لهندسة الأنظمة المدمجة المتقدمة

### إلى أين تذهب بعد ذلك

**عمّق معرفتك بـ AVR:**
- ادرس ورقة بيانات ATmega328P بدقة - إنها كتابك المقدس
- نفّذ اتصالات UART و SPI و I2C من الصفر
- أتقن العدادات/الموقتات لـ PWM والتوقيت
- استكشف المقاطعات للأنظمة المدمجة المستجيبة
- تعمق في أوضاع الطاقة المنخفضة للأجهزة التي تعمل بالبطارية

**وسّع مجموعة أدواتك:**
- تعلم Git بشكل صحيح: التفرع، الدمج، إعادة الأساس
- اكتب اختبارات الوحدة للكود المدمج (إطار Unity)
- استخدم محللات المنطق والأوسيلوسكوبات لتصحيح الأجهزة
- استكشف RTOS (أنظمة التشغيل في الوقت الفعلي) مثل FreeRTOS

**ارتقِ إلى منصات مختلفة:**
- متحكمات ARM Cortex-M الدقيقة (STM32، Nordic nRF52)
- ESP32 لمشاريع WiFi/Bluetooth
- متحكمات RISC-V الدقيقة (المستقبل!)

### موارد أساسية

**التوثيق:**
- [مرجع AVR Libc](https://www.nongnu.org/avr-libc/): مرجعك الأساسي لبرمجة AVR
- [ورقة بيانات ATmega328P](https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-7810-Automotive-Microcontrollers-ATmega328P_Datasheet.pdf): تعلم الشريحة من الداخل للخارج
- [خيارات GCC AVR](https://gcc.gnu.org/onlinedocs/gcc/AVR-Options.html): علامات المترجم موضحة

**المجتمعات:**
- [منتدى AVR Freaks](https://www.avrfreaks.net/): مجتمع AVR طويل الأمد
- [r/embedded](https://reddit.com/r/embedded): subreddit احترافي للأنظمة المدمجة
- [منتدى EEVblog](https://www.eevblog.com/forum/): مناقشات الإلكترونيات والأنظمة المدمجة

**قنوات YouTube:**
- Mitch Davis (دروس AVR ممتازة)
- Ben Eater (أساسيات الأجهزة)
- GreatScott! (مشاريع مدمجة عملية)

---

الرحلة من Arduino IDE إلى أدوات التطوير الاحترافية ليست مجرد برامج أفضل - بل تتعلق بأن تصبح مهندسًا أكثر قدرة. أنت الآن تفهم ما يحدث تحت الغطاء، وهذه المعرفة ستخدمك طوال مسيرتك المهنية في الأنظمة المدمجة.

وميض LED الخاص بك لم يعد مجرد LED وامض. إنه كود C مترجم، تعليمات آلة محسّنة، معالجات سجلات مؤقتة بعناية، والتحكم الدقيق في الأجهزة. هذا هو الفرق بين الهاوي والمهندس.

الآن اذهب وابنِ شيئًا مذهلاً. 🚀

---

*هل وجدت هذا الدليل مفيدًا؟ هل لديك أسئلة أو اقتراحات؟ لا تتردد في التواصل أو المساهمة بتحسينات. برمجة سعيدة!*
