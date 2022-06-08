Feature: Hear shout
  Rule: Shouts can be heard by other users

  Scenario: Listener hears message
    Given the range is 100
    And a person named lucy
    And a person named sean
    When sean shouts "free baggel's at seans"
    Then lucy hears sean's message

  Scenario: Listener hears different message
    Given the range is 100
    And a person named lucy
    And a person named sean
    When sean shouts "free coffee"
    Then lucy hears sean's message

  Rule: Shouts should only be heard if listener is within range

  Scenario: Listener is within range
      Given the range is 100
      And a person named Sean is located at 0
      And a person named Lucy is located at 50
      When Sean shouts
      Then Lucy should hear a shout

    Scenario: Listener is out of range
      Given the range is 100
      And a person named Sean is located at 0
      And a person named Lucy is located at 150
      When Sean shouts
      Then Lucy should not hear a shout

