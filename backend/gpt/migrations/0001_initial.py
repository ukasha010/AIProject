# Generated by Django 5.0.2 on 2024-03-05 04:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Chat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.ForeignKey(to='auth.User', on_delete=models.CASCADE)),
                ('prompt', models.TextField()),
                ('result', models.TextField()),
            ],
        ),
    ]
