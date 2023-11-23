# Parties data

The files in this directory are a collection of political entities and articles displaying their handling of subjects

## Data structure
### [{area}.yaml](area.yaml)
Which parties are being weighed for the area
```yaml
# parties.yaml
{id}:
    id: {unique party id}
    name: {party name for display in UI}
    colour: {css colour value for the party in the UI}
```
When adding non-Belgian parties, add a two letter prefix (e.g. nl_) to the `id` and subsequent filenames

### [scale.yaml](scale.yaml)
The self-administered rules of scoring a party's contribution to the article/subject
```yaml
# scale.yaml
{number}:
    - Example of what intensity of support/opposition would justify the number score above
    - Higher is more intense
    - E.g. +3 is great support, -3 is grand opposition, +1 is showing some signs of caring, -1 is negligence...
```

### [subjects.yaml](subjects.yaml)
The subjects being talked about in the articles
```yaml
# subjects.yaml
- A list
- Of subjects
- Being talked
- About
```

### [articles/{article source name}.yaml](articles/)
```yaml
# articles/*.yaml
- description: {headline/short summary of article}
  year: {article release year}
  url: {https link to article}

  {partyid}: {positive score}
  {partyid}: -{negative score}

  subjects:
    - {subjects}
    - {from subjects.yaml}

- description: ...

```