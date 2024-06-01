# Files and locations

## Types of file

There are four basic types of file in Eventum:
1. **Configuration file** - main configuration file which was reviewed in previous page, we specify it as an argument when starting Eventum
2. **Sample file** - CSV sample used by Jinja event plugin to enrich events with specific data
3. **Template file** - jinja template used by Jinja event plugin as well, it is used to define structure of events
4. **Time pattern file** - yaml file used by Time patterns input plugin, it contains time distribution parameters

## Resolving paths

Paths of all listed above can be absolute or relative. If relative path is provided and file is not found from current working directory then Eventum will search it in the default directory of content which is `$HOME/.eventum/content/`. When you are working with Eventum Studio and save some file it is always saved there.

It is recommended (*for convenience purposes*) to keep all of Eventum files in this directory, thus your content can be accessed by different Eventum components in centralized way.  