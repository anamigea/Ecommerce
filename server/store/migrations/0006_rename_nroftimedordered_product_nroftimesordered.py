# Generated by Django 3.2.16 on 2022-12-28 20:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0005_product_nroftimedordered'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='nrOfTimedOrdered',
            new_name='nrOfTimesOrdered',
        ),
    ]
